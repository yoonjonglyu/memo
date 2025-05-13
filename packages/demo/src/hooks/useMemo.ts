import { useRecoilState, useRecoilValue } from 'recoil';
import { debounce } from 'isa-util';

import memoState, {
  memoListState,
  MemoListStateProps,
} from '../store/memo/memoListState';

import MemoApi from '../api/memoApi';

/**
 * 상태는 필연적으로 그 상태를 처리하는 로직이 파생된다.
 * 그런 로직은 규모에 따라 다르지만 같은 갈래의 관심사를 가지는 경우가 많다.
 * 관심사에 따라서 커스텀훅으로 그런 로직들을 묶어주는 것이 좋다.
 * 또 추가로 view model 또는 controller 정도 레이어에 해당하는 레이어를 기본적으로 가지는게
 * 보편적인 웹프로그램 개발 방법론과 유사하기에 여러모로 좋다.
 */

const MemoSignal = new MemoApi();

const handleSetMemo = debounce(
  async args => await MemoSignal.setMemoList(args),
  100
);
const handleSetMemoContext = debounce(
  async (index, value) => await MemoSignal.updateMemoContext(index, value),
  100
);

function useMemo() {
  const [memo, setMemo] = useRecoilState(memoState);
  const memoList = useRecoilValue(memoListState);
  // API 호출 역시 UI보다는 데이터 흐름에 대한 영역이다
  // 보통 swr이나 react-query + 그래프큐엘을 쓰게될텐데 해당 도구들 역시 커스텀훅에 가깝게 처리해서 쓰면된다.

  // memoList를 초기화하고 새로운 타입의 memo를 추가하고 삭제하는는 함수들이다.
  const initMemo = async () => {
    const data = await MemoSignal.getMemoList();
    setMemo({ list: data, date: Date.now() });
  };
  const _ADDMemo = async (memo: MemoListStateProps) => {
    const state = [...JSON.parse(JSON.stringify(memoList)), memo];
    setMemo({ list: state, date: Date.now() });
    handleSetMemo(state);
  };
  const handleNewTodo = async () => {
    _ADDMemo({
      idx: Date.now().toString(),
      type: 'todo',
      props: [],
    });
  };
  const handleNewNote = async () => {
    _ADDMemo({
      idx: Date.now().toString(),
      type: 'note',
      props: [
        { idx: Date.now(), type: 'h1', value: '' },
        { idx: Date.now() + 1, type: 'p', value: '' },
      ],
    });
  };
  const handleNewMemo = async () => {
    _ADDMemo({
      idx: Date.now().toString(),
      type: 'memo',
      props: '',
    });
  };
  const handleDeleteMemo = async (idx: number) => {
    const state = JSON.parse(JSON.stringify(memoList));
    const change = [
      ...state.slice(0, idx),
      ...state.slice(idx + 1, state.length),
    ];
    setMemo({ list: change, date: Date.now() });
    handleSetMemo(change);
  };
  // memo의 내용을 수정하는 함수이다.
  const handleMemo = async (index: number, value: string) => {
    const state = JSON.parse(JSON.stringify(memoList));
    state[index].props = value;
    setMemo({ list: state, date: Date.now() });
    handleSetMemoContext(index, value);
  };
  // todo의 내용을 수정하는 함수이다.
  const handleAddTodo = async (index: number, value: string) => {
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[index];
    if (change.type === 'todo') {
      change.props.push({
        isAvail: false,
        todo: value,
      });
    }
    setMemo({ list: state, date: Date.now() });
    handleSetMemoContext(index, change.props);
  };
  const handleDeleteTodo = async (index: number, idx: number) => {
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[index];
    if (change.type === 'todo') {
      change.props = [
        ...state[index].props.slice(0, idx),
        ...state[index].props.slice(idx + 1, state[index].props.length),
      ];
    }
    setMemo({ list: state, date: Date.now() });
    handleSetMemoContext(index, change.props);
  };
  const handleCheckTodo = async (index: number, idx: number) => {
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[index];
    if (change.type === 'todo') {
      change.props[idx].isAvail = !change.props[idx].isAvail;
    }
    setMemo({ list: state, date: Date.now() });
    handleSetMemoContext(index, change.props);
  };
  // Note의 내용을 수정하는 함수이다.
  // 개별 context를 갱신하는 방식으로 하니 디바운스과정에서 이전 작업의 state가 소실된다.
  // api콜을 최소화하면서 주고 받는 데이터 패킷의 크기를 줄일려면 api콜을 좀 더 복잡하게 관리해야한다.
  // flush queue 를 디테일하게 커스텀해서 처리하는게 적절한 해결방법이라고 판단된다.
  const handleNote = async (
    index: number,
    cdx: number,
    value: { idx: number; type: string; value: string }
  ) => {
    const data = await MemoSignal.getMemoItem(index);
    const state = JSON.parse(JSON.stringify(memoList));
    const change = (state[index] = data);
    change.props[cdx] = value;
    await handleSetMemoContext(index, change.props);
  };
  const handleAddNoteItem = async (
    index: number,
    cdx: number,
    type: string
  ) => {
    const data = await MemoSignal.getMemoItem(index);
    const state = JSON.parse(JSON.stringify(memoList));
    const change = (state[index] = data);
    if (change.type === 'note') {
      change.props = [
        ...state[index].props.slice(0, cdx),
        { idx: Date.now(), type: type, value: '' },
        ...state[index].props.slice(cdx, state[index].props.length),
      ];
    }
    setMemo({ list: state, date: Date.now() });
    await MemoSignal.updateMemoContext(index, change.props);
  };
  const handleDeleteNoteItem = async (index: number, cdx: number) => {
    const data = await MemoSignal.getMemoItem(index);
    const state = JSON.parse(JSON.stringify(memoList));
    const change = (state[index] = data);
    if (change.type === 'note') {
      change.props = [
        ...state[index].props.slice(0, cdx),
        ...state[index].props.slice(cdx + 1, state[index].props.length),
      ];
    }
    setMemo({ list: state, date: Date.now() });
    await MemoSignal.updateMemoContext(index, change.props);
  };

  return {
    memoList,
    initMemo,
    handleNewMemo,
    handleNewTodo,
    handleNewNote,
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
