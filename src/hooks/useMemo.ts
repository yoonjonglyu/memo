import { useRecoilState } from 'recoil';

import memoListState, { MemoListStateProps } from '../store/memo/memoListState';

import MemoApi from '../api/memoApi';

/**
 * 상태는 필연적으로 그 상태를 처리하는 로직이 파생된다.
 * 그런 로직은 규모에 따라 다르지만 같은 갈래의 관심사를 가지는 경우가 많다.
 * 관심사에 따라서 커스텀훅으로 그런 로직들을 묶어주는 것이 좋다.
 * 또 추가로 view model 또는 controller 정도 레이어에 해당하는 레이어를 기본적으로 가지는게
 * 보편적인 웹프로그램 개발 방법론과 유사하기에 여러모로 좋다.
 */
function useMemo() {
  const [memoList, setMemoList] = useRecoilState(memoListState);
  const MemoSignal = new MemoApi();
  // API 호출 역시 UI보다는 데이터 흐름에 대한 영역이다
  // 보통 swr이나 react-query + 그래프큐엘을 쓰게될텐데 해당 도구들 역시 커스텀훅에 가깝게 처리해서 쓰면된다.
  const hanleNewMemo = async (memo: MemoListStateProps) => {
    const state = [...memoList, memo];
    setMemoList(state);
    await MemoSignal.setMemoList(state);
  };
  const handleDeleteMemo = async (idx: number) => {
    const state = [
      ...memoList.slice(0, idx),
      ...memoList.slice(idx + 1, memoList.length),
    ];
    setMemoList(state);
    await MemoSignal.setMemoList(state);
  };
  const handleMemo = async (index: number, value: string) => {
    const state = JSON.parse(JSON.stringify(memoList));
    state[index].props = value;
    // 본래라면 이런 세부 사항의 요청의 경우 전체를 클라이언트에서 보내서 갱신하기보다는
    // 제한된 쿼리를 바탕으로 벡엔드 내부에서 처리를 하는게 정상이지만 해당 앱은 벡엔드 서버가 없으니 대충 처리했다.
    // 에러 핸들링이나 데이터 동기화 문제 역시 생략
    setMemoList(state);
    await MemoSignal.setMemoList(state);
  };
  const handleAddTodo = async (index: number, value: string) => {
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[index];
    if (change.type === 'todo') {
      change.props.push({
        isAvail: false,
        todo: value,
      });
    }
    setMemoList(state);
    await MemoSignal.setMemoList(state);
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
    setMemoList(state);
    await MemoSignal.setMemoList(state);
  };
  const handleCheckTodo = async (index: number, idx: number) => {
    const state = JSON.parse(JSON.stringify(memoList));
    const change = state[index];
    if (change.type === 'todo') {
      change.props[idx].isAvail = !change.props[idx].isAvail;
    }
    setMemoList(state);
    await MemoSignal.setMemoList(state);
  };
  return {
    memoList,
    hanleNewMemo,
    handleDeleteMemo,
    handleMemo,
    handleAddTodo,
    handleCheckTodo,
    handleDeleteTodo,
  };
}

export default useMemo;
