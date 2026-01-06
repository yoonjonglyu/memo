import React, { useEffect } from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';
import MemoModal from './MemoModal';

import useMemo from '../../hooks/useMemo';

export interface MemoFeatureProps {
  isEdit: boolean;
}

const MemoFeature: React.FC<MemoFeatureProps> = ({ isEdit }) => {
  const { memoList, initMemo } = useMemo();

  useEffect(() => {
    initMemo();
  }, []);

  return (
    // columns 레이아웃을 사용하여 테트리스처럼 빈틈없이 쌓이는 느낌 부여
    <BoardLayout>
      {memoList.map((item, index) => {
        // 인덱스나 타입을 기반으로 4가지 로고 색상을 순환 배정
        const colors = ['m', 'o', 'm2', 'e'];
        const blockType = colors[index % 4];

        return (
          <div
            key={item.idx}
            className="inline-block w-full break-inside-avoid mb-6"
          >
            <MemoItem
              index={index}
              type={item.type}
              props={item.props}
              isEdit={isEdit}
              // 리뉴얼될 MemoItem에서 사용할 컬러 타입 전달
              blockColor={blockType}
            />
          </div>
        );
      })}
      <MemoModal />
    </BoardLayout>
  );
};

export default MemoFeature;
