import React, { useState } from 'react';

import FloatBtn from '../../components/atoms/FloatBtn';
import Modal from '../../components/molecules/Modal';

import { ModalPortal } from '../../providers/ModalProvider';

export interface MemoControlProps {}

const MemoControl: React.FC<MemoControlProps> = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <ModalPortal>
      <FloatBtn
        style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 999 }}
        onClick={() => setIsModal(true)}
      />
      {isModal ? (
        <Modal
          header="Add Memo"
          children={
            <>
              <strong>Select Memo Type</strong>
              <ul>
                <li>
                  <button>Memo</button>
                </li>
                <li>
                  <button>Todo</button>
                </li>
              </ul>
            </>
          }
          footer={<button onClick={() => setIsModal(false)}>취소</button>}
        />
      ) : null}
    </ModalPortal>
  );
};

export default MemoControl;
