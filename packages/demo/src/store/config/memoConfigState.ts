import { atom } from 'recoil';

export interface MemoConfigStateProps {
  sort: 'latest' | 'oldest';
}

const MemoConfigState = atom<MemoConfigStateProps>({
  key: 'memoconfig',
  default: {
    sort: 'oldest',
  },
});

export default MemoConfigState;
