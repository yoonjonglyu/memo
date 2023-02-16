import { useRecoilState } from 'recoil';

import memoListState from '../store/memo/memoListState';

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
        next[index] = change;
      }
      return next;
    });
  };
  const handleDeleteTodo = (index: number, idx: number) => {
    setMemoList(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      if (next[index].type === 'todo') {
        next[index].props = [
          ...next[index].props.slice(0, idx),
          ...next[index].props.slice(idx + 1, next[index].props.length),
        ] as any;
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
        next[index] = change;
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
