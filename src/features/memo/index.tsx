import React from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';
import MemoControl from './MemoControl';

import useMemo from '../../hooks/useMemo';

export interface MemoFeatureProps {}

const MemoFeature: React.FC<MemoFeatureProps> = () => {
  const { memoList } = useMemo();

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
      <MemoControl />
    </BoardLayout>
  );
};

export default MemoFeature;
