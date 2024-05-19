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
interface NoteProps {
  idx: string;
  type: 'note';
  props: Array<{ idx: number; type: string; value: string }>;
}

export type MemoListStateProps = MemoProps | TodoProps | NoteProps;

const memoListState = atom<Array<MemoListStateProps>>({
  key: 'memoList',
  default: [],
});

export default memoListState;
