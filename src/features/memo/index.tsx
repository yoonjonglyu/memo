import React, {useEffect} from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';
import MemoModal from './MemoModal';

import useMemo from '../../hooks/useMemo';

export interface MemoFeatureProps {}

const MemoFeature: React.FC<MemoFeatureProps> = () => {
  const { memoList, initMemo } = useMemo();

  useEffect(() => {
    initMemo();
  }, [])

  return (
    <BoardLayout>
      {memoList.map((item, index) => {
        return (
          <MemoItem
            key={item.idx}
            index={index}
            type={item.type}
            props={item.props}
          />
        );
      })}
      <MemoModal />
    </BoardLayout>
  );
};

export default MemoFeature;
