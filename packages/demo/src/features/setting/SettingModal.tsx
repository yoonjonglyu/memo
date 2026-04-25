import React, { useState } from 'react';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import { ModalPortal } from '../../providers/ModalProvider';
import useGoogleDrive from '../../hooks/useGoogleDrive';

export interface SettingModalProps {
  handleStep: Function;
  closeModal: VoidFunction;
}

const SettingModal: React.FC<SettingModalProps> = ({
  handleStep,
  closeModal,
}) => {
  const { connect, upload, download, connected } = useGoogleDrive();
  // 업로드/다운로드 확인 상태 관리
  const [confirmType, setConfirmType] = useState<'upload' | 'download' | null>(
    null
  );

  const handleConfirmAction = async () => {
    if (confirmType === 'upload') await upload();
    else if (confirmType === 'download') await download();
    setConfirmType(null);
  };

  return (
    <ModalPortal>
      {confirmType ? (
        /* 동기화 확인 모달 */
        <Modal
          header={confirmType === 'upload' ? 'Upload Sync' : 'Download Sync'}
          footer={
            <div className="grid grid-cols-2 gap-2">
              <LargeButton
                onClick={() => setConfirmType(null)}
                className="bg-gray-400!"
              >
                Back
              </LargeButton>
              <LargeButton
                className={confirmType === 'upload' ? 'bg-memo-m!' : 'bg-memo-e!'}
                onClick={handleConfirmAction}
              >
                Proceed
              </LargeButton>
            </div>
          }
        >
          <div className="py-8 text-center px-4">
            <div className="text-4xl mb-4">{confirmType === 'upload' ? '📤' : '📥'}</div>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
              {confirmType === 'upload'
                ? "Do you want to upload your current device's notes to Google Drive?\nExisting data stored on the drive disappears."
                : "Do you want to download notes from Google Drive to your current device?\nExisting notes on your device will be overwritten."}
            </p>
          </div>
        </Modal>
      ) : (
        <Modal
        header="Setting"
        footer={
          <LargeButton onClick={closeModal} className="bg-gray-400!">
            Cancel
          </LargeButton>
        }
      >
        {/* 설정 리스트 컨테이너 */}
        <div className="flex flex-col gap-3 py-2">
          {/* 주요 액션 버튼 그룹 */}
          <div className="grid grid-cols-1 gap-2">
            {!connected ? (
              <LargeButton className="bg-memo-m!" onClick={connect}>
                Sync with Google
              </LargeButton>
            ) : (
              <>
                <LargeButton
                    className="bg-memo-m!"
                    onClick={() => setConfirmType('upload')}
                  >
                  Upload to Drive
                </LargeButton>
                <LargeButton
                    className="bg-memo-e!"
                    onClick={() => setConfirmType('download')}
                  >
                  Download from Drive
                </LargeButton>
              </>
            )}
            <div className="grid grid-cols-2 gap-2">
              <LargeButton className="bg-memo-o!" onClick={() => handleStep(1)}>
                Import
              </LargeButton>
              <LargeButton className="bg-memo-o!" onClick={() => handleStep(2)}>
                Export
              </LargeButton>
            </div>

            <LargeButton className="bg-memo-m2!" onClick={() => handleStep(3)}>
              Get Started
            </LargeButton>
          </div>

          {/* 앱 정보 영역: 테트리스 블록 하단에 붙은 작은 정보 텍스트 느낌 */}
          <div className="mt-4 p-4 bg-gray-50 border-l-4 border-gray-300 rounded-sm">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
              App Info
            </h4>
            <div className="text-[13px] leading-relaxed text-gray-600">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">Version</span>
                <span>v2.0.6</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">Support</span>
                <span className="text-[11px]">yunjonglyu@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">Privacy</span>
                <a
                  href="https://yoonjonglyu.github.io/privacy/memo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  MemoFlow Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      )}
    </ModalPortal>
  );
};

export default SettingModal;
