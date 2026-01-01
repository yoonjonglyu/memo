import React, { useState } from 'react';
import { ModalPortal } from '../../providers/ModalProvider';
import useMemo from '../../hooks/useMemo';

import FloatBtn from '../../components/atoms/FloatBtn';

export interface MemoModalProps {}

const MemoModal: React.FC<MemoModalProps> = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <ModalPortal>
      <FloatBtn
        onClick={() => setIsModal(true)}
        className=" hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-tetris flex items-center justify-center"
        aria-label="add-memo"
      />

      {/* 2. Modal Overlay & Content */}
      {isModal && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white border-t-8 border-memo-o shadow-2xl rounded-sm animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-xl font-black tracking-tight text-gray-800">
                ADD NEW BLOCK
              </h2>
            </div>

            {/* Contents */}
            <div className="p-6">
              <ModalContents handleCloseModal={() => setIsModal(false)} />
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 flex justify-end">
              <button
                onClick={() => setIsModal(false)}
                className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalPortal>
  );
};

interface ModalContentsProps {
  handleCloseModal: VoidFunction;
}

const ModalContents: React.FC<ModalContentsProps> = ({ handleCloseModal }) => {
  const { handleNewMemo, handleNewTodo, handleNewNote } = useMemo();

  // 각 타입별 로고 컬러 매핑
  const types = [
    {
      label: 'Memo',
      action: handleNewMemo,
      color: 'bg-memo-m',
      border: 'border-memo-m',
    },
    {
      label: 'Todo',
      action: handleNewTodo,
      color: 'bg-memo-o',
      border: 'border-memo-o',
    },
    {
      label: 'Note',
      action: handleNewNote,
      color: 'bg-memo-m2',
      border: 'border-memo-m2',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-xs uppercase tracking-widest text-gray-400 font-bold">
        Select Type
      </strong>
      <div className="grid gap-3">
        {types.map(t => (
          <button
            key={t.label}
            onClick={() => {
              t.action();
              handleCloseModal();
            }}
            className={`
              relative group overflow-hidden
              p-4 text-left font-black text-lg uppercase
              bg-white border-2 ${t.border} text-gray-800
              shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]
              active:shadow-none active:translate-x-1 active:translate-y-1
              transition-all flex justify-between items-center
            `}
          >
            {t.label}
            <div className={`w-3 h-3 ${t.color} rounded-full animate-pulse`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemoModal;
