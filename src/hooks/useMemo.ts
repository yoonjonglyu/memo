import { useRecoilState } from 'recoil';

import memoListState from '../store/memo/memoListState';

/**
 * 상태는 필연적으로 그 상태를 처리하는 로직이 파생된다.
 * 그런 로직은 규모에 따라 다르지만 같은 갈래의 관심사를 가지는 경우가 많다.
 * 관심사에 따라서 커스텀훅으로 그런 로직들을 묶어주는 것이 좋다.
 * 또 추가로 view model 또는 controller 정도 레이어에 해당하는 레이어를 기본적으로 가지는게
 * 보편적인 웹프로그램 개발 방법론과 유사하기에 여러모로 좋다.
 */
function useMemo() {
  const [memoList, setMemoList] = useRecoilState(memoListState);

  const handleMemo = (index: number, value: string) => {
    setMemoList(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      next[index].props = value;
      return next;
    });
  };
  const handleAddTodo = (index: number, value: string) => {
    setMemoList(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const change = next[index];
      if (change.type === 'todo') {
        change.props.push({
          isAvail: false,
          todo: value,
        });
      }
      return next;
    });
  };
  const handleDeleteTodo = (index: number, idx: number) => {
    setMemoList(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const change = next[index];
      if (change.type === 'todo') {
        change.props = [
          ...next[index].props.slice(0, idx),
          ...next[index].props.slice(idx + 1, next[index].props.length),
        ];
      }
      return next;
    });
  };
  const handleCheckTodo = (index: number, idx: number) => {
    setMemoList(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const change = next[index];
      if (change.type === 'todo') {
        change.props[idx].isAvail = !change.props[idx].isAvail;
      }
      return next;
    });
  };
  return {
    memoList,
    handleMemo,
    handleAddTodo,
    handleCheckTodo,
    handleDeleteTodo,
  };
}

export default useMemo;
