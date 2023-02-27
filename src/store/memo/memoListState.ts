import { atom } from 'recoil';

interface MemoProps {
  idx: string;
  type: 'memo';
  props: string;
}
interface TodoProps {
  idx: string;
  type: 'todo';
  props: Array<{ isAvail: boolean; todo: string }>;
}

export type MemoListStateProps = MemoProps | TodoProps;

const memoListState = atom<Array<MemoListStateProps>>({
  key: 'memoList',
  default: [
    { idx: 'a1', type: 'memo', props: 'ss' },
    { idx: 'a2', type: 'todo', props: [{ isAvail: true, todo: 'aaa' }] },
  ],
});

export default memoListState;
