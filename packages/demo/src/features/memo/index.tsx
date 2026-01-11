import React, { useEffect } from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';
import MemoModal from './MemoModal';

import Logo from '../../../assets/icon.png'

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
      {memoList.length > 0 ? (
        memoList.map((item, index) => {
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
        })
      ) : (
        <EmptyMemo />
      )}
      <MemoModal />
    </BoardLayout>
  );
};

export default MemoFeature;

const EmptyMemo: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
    <div className="mb-6 opacity-20">
      <img
        src={Logo}
        alt="MemoFlow Logo"
        className="w-24 h-24 grayscale"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Let your thoughts flow
    </h3>
    <p className="text-gray-500 leading-relaxed mb-8">
      Your board is empty.
      <br />
      Tap the button below to create your first record.
    </p>
    <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
      <div className="p-4 border-2 border-dashed border-gray-200 rounded-2xl text-sm text-gray-400">
        📝 Quick Memo
      </div>
      <div className="p-4 border-2 border-dashed border-gray-200 rounded-2xl text-sm text-gray-400">
        ✅ To-Do List
      </div>
    </div>
  </div>
);
