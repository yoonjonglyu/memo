import React, { useState, useEffect } from 'react';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import { ModalPortal } from '../../providers/ModalProvider';
import useGPicker from '../../hooks/useGPicker';
import useMemo from '../../hooks/useMemo';

export interface SettingModalProps {
  handleStep: Function;
  closeModal: VoidFunction;
}

const SettingModal: React.FC<SettingModalProps> = ({
  handleStep,
  closeModal,
}) => {
  const [syncId, setSyncID] = useState('');
  const { initMemo } = useMemo();

  // @ts-ignore (v4에서도 기존 훅은 그대로 사용 가능합니다)
  const [openPicker, auth, downloadInfo] = useGPicker(googleCID, googleDevKey);

  useEffect(() => {
    if (syncId.length > 0) syncDriveMemo();
  }, [syncId]);

  const syncDriveMemo = async () => {
    if (!auth) return;
    await downloadInfo(syncId, auth.access_token);
    await initMemo();
  };

  return (
    <ModalPortal>
      <Modal
        header="Setting"
        footer={
          <LargeButton onClick={closeModal} className="!bg-gray-400">
            Cancel
          </LargeButton>
        }
      >
        {/* 설정 리스트 컨테이너 */}
        <div className="flex flex-col gap-3 py-2">
          {/* 주요 액션 버튼 그룹 */}
          <div className="grid grid-cols-1 gap-2">
            <LargeButton
              // className="!bg-memo-m"
              onClick={() => openPicker((id: string) => setSyncID(id))}
              disabled
            >
              Sync with Google(Update Coming Soon)
            </LargeButton>

            <div className="grid grid-cols-2 gap-2">
              <LargeButton className="!bg-memo-o" onClick={() => handleStep(1)}>
                Import
              </LargeButton>
              <LargeButton className="!bg-memo-o" onClick={() => handleStep(2)}>
                Export
              </LargeButton>
            </div>

            <LargeButton className="!bg-memo-m2" onClick={() => handleStep(3)}>
              Download App
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
                <span>v2.0.4</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">Support</span>
                <span className="text-[11px]">yunjonglyu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </ModalPortal>
  );
};

export default SettingModal;
