import { useRecoilState } from 'recoil';

import MemoConfigState, {
  type MemoConfigStateProps,
} from '../store/config/memoConfigState';

import MemoApi from '../api/memoApi';

const MemoSignal = new MemoApi();

const useConfig = () => {
  const [memoConfig, setMemoConfig] = useRecoilState(MemoConfigState);

  const initMemoConfig = async () => {
    const data = await MemoSignal.getMemoConfig();
    setMemoConfig(data);
  };
  const handleSort = (flag?: MemoConfigStateProps['sort']) => {
    setMemoConfig(prev => ({
      ...prev,
      sort: flag ?? (prev.sort === 'latest' ? 'oldest' : 'latest'),
    }));

    MemoSignal.setMemoConfig({
      ...memoConfig,
      sort: flag ?? (memoConfig.sort === 'latest' ? 'oldest' : 'latest'),
    });
  };

  return {
    memoConfig,
    initMemoConfig,
    handleSort,
  };
};

export default useConfig;
