import { useRecoilState, useRecoilValue } from 'recoil';
import { FlushQueue } from 'isa-util';

import MemoState, {
  MemoListState,
  MemoListStateProps,
} from '../store/memo/memoListState';
import MemoConfigState from '../store/config/memoConfigState';

import MemoApi from '../api/memoApi';

/**
 * 상태는 필연적으로 그 상태를 처리하는 로직이 파생된다.
 * 그런 로직은 규모에 따라 다르지만 같은 갈래의 관심사를 가지는 경우가 많다.
 * 관심사에 따라서 커스텀훅으로 그런 로직들을 묶어주는 것이 좋다.
 * 또 추가로 view model 또는 controller 정도 레이어에 해당하는 레이어를 기본적으로 가지는게
 * 보편적인 웹프로그램 개발 방법론과 유사하기에 여러모로 좋다.
 */

const MemoSignal = new MemoApi();
const flushQueue = new FlushQueue({ debounceMs: 15 });
// flushQueue는 api콜을 디바운스 처리하는데 사용된다.
const handleSetMemo = async (args: any[]) =>
  flushQueue.add('setMemo', async () => await MemoSignal.setMemoList(args));
const handleSetMemoContext = async (
  index: number,
  value: any,
  cdx: number = 999
) =>
  flushQueue.add(
    `setMemoContext${index}/${cdx}`,
    async () => await MemoSignal.updateMemoContext(index, value)
  );

function useMemo() {
  const [_memo, set_Memo] = useRecoilState(MemoState);
  const [memoList, setMemoList] = useRecoilState(MemoListState);
  const memoConfig = useRecoilValue(MemoConfigState);
  // API 호출 역시 UI보다는 데이터 흐름에 대한 영역이다
  // 보통 swr이나 react-query + 그래프큐엘을 쓰게될텐데 해당 도구들 역시 커스텀훅에 가깝게 처리해서 쓰면된다.

  // memoList를 초기화하고 새로운 타입의 memo를 추가하고 삭제하는 함수들이다.
  const initMemo = async () => {
    const data = await MemoSignal.getMemoList();
    set_Memo({ ..._memo, list: data });
  };
  const _getOriginalIndex = (viewIndex: number) => {
    const targetIdx = memoList[viewIndex].idx;
    return _memo.list.findIndex(m => m.idx === targetIdx);
  };
  const _ADDMemo = async (memo: MemoListStateProps) => {
    const state =
      memoConfig.sort === 'oldest' ? [...memoList, memo] : [memo, ...memoList];
    setMemoList(state);
    handleSetMemo(memoConfig.sort === 'oldest' ? state : state.reverse());
  };
  const handleNewTodo = async () => {
    _ADDMemo({
      idx: performance.now().toString(),
      type: 'todo',
      props: [],
    });
  };
  const handleNewNote = async () => {
    _ADDMemo({
      idx: performance.now().toString(),
      type: 'note',
      props: [
        { idx: performance.now(), type: 'h1', value: '' },
        { idx: performance.now() + 1, type: 'p', value: '' },
      ],
    });
  };
  const handleNewMemo = async () => {
    _ADDMemo({
      idx: performance.now().toString(),
      type: 'memo',
      props: '',
    });
  };
  const handleNewDraft = async () => {
    _ADDMemo({
      idx: performance.now().toString(),
      type: 'draft',
      props: '',
    });
  };
  const handleDeleteMemo = async (viewIndex: number) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    if (originalIndex === -1) return;
    const state = JSON.parse(JSON.stringify(memoList));
    state.splice(viewIndex, 1);
    setMemoList(state);
    handleSetMemo(memoConfig.sort === 'oldest' ? state : state.reverse());
  };
  // memo의 내용을 수정하는 함수이다.
  const handleMemo = async (viewIndex: number, value: string) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    if (originalIndex === -1) return;

    const state = JSON.parse(JSON.stringify(memoList));
    state[viewIndex].props = value;

    setMemoList(state);
    // API 호출 시에는 원본 배열 기준의 인덱스를 전달
    handleSetMemoContext(originalIndex, value);
  };
  // todo의 내용을 수정하는 함수이다.
  const handleAddTodo = async (viewIndex: number, value: string) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[viewIndex];

    if (change.type === 'todo') {
      change.props.push({ isAvail: false, todo: value });
      setMemoList(state);
      handleSetMemoContext(originalIndex, change.props);
    }
  };
  const handleDeleteTodo = async (viewIndex: number, todoIdx: number) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[viewIndex];

    if (change.type === 'todo') {
      change.props.splice(todoIdx, 1);
      setMemoList(state);
      handleSetMemoContext(originalIndex, change.props);
    }
  };
  const handleCheckTodo = async (viewIndex: number, todoIdx: number) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[viewIndex];

    if (change.type === 'todo') {
      change.props[todoIdx].isAvail = !change.props[todoIdx].isAvail;
      setMemoList(state);
      handleSetMemoContext(originalIndex, change.props);
    }
  };
  // Note의 내용을 수정하는 함수이다.
  const handleNote = async (
    viewIndex: number,
    cdx: number,
    value: { idx: number; type: string; value: string }
  ) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    const data = await MemoSignal.getMemoList();
    const state = [...data];
    const change = state[originalIndex];

    if (change.type === 'note') {
      change.props[cdx] = value;
      await handleSetMemoContext(originalIndex, change.props, cdx);
    }
  };
  const handleAddNoteItem = async (
    viewIndex: number,
    cdx: number,
    type: string
  ) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    const data = await MemoSignal.getMemoList();
    const state = [...data];
    const change = state[originalIndex];

    if (change.type === 'note') {
      change.props.splice(cdx, 0, { idx: Date.now(), type: type, value: '' });
      set_Memo({ ..._memo, list: state });
      await handleSetMemoContext(originalIndex, change.props, cdx);
    }
  };
  const handleDeleteNoteItem = async (viewIndex: number, cdx: number) => {
    const originalIndex = _getOriginalIndex(viewIndex);
    const data = await MemoSignal.getMemoList();
    const state = [...data];
    const change = state[originalIndex];

    if (change.type === 'note') {
      change.props.splice(cdx, 1);
      set_Memo({ ..._memo, list: state });
      await handleSetMemoContext(originalIndex, change.props, cdx);
    }
  };
  return {
    memoList,
    initMemo,
    handleNewMemo,
    handleNewTodo,
    handleNewNote,
    handleNewDraft,
    handleDeleteMemo,
    handleMemo,
    handleAddTodo,
    handleCheckTodo,
    handleDeleteTodo,
    handleNote,
    handleAddNoteItem,
    handleDeleteNoteItem,
  };
}

export default useMemo;
