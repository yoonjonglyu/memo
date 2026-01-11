// components/common/ExitModal.tsx
import React from 'react';
import { App } from '@capacitor/app';
import { ModalPortal } from '../../providers/ModalProvider';

export interface ExitModalProps {
  onClose: () => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ onClose }) => {
  return (
    <ModalPortal>
      {/* 배경 레이어 */}
      <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
        {/* 모달 바디 */}
        <div className="w-full max-w-sm bg-white rounded-4xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
          <div className="text-center">
            <div className="text-4xl mb-4">🚪</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Exit MemoFlow?
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Are you sure you want to close the app?
              <br />
              Your creative flow is safely stored.
            </p>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold active:scale-95 transition-transform"
              >
                Stay
              </button>
              <button
                onClick={() => App.exitApp()}
                className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold shadow-lg shadow-red-200 active:scale-95 transition-transform"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ExitModal;
