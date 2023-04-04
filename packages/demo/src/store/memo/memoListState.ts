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
  ],
});

export default memoListState;
