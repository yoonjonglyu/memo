import React, { useState } from 'react';

import FloatBtn from '../../components/atoms/FloatBtn';
import Modal from '../../components/molecules/Modal';

import { ModalPortal } from '../../providers/ModalProvider';
import useMemo from '../../hooks/useMemo';

export interface MemoControlProps {}

const MemoControl: React.FC<MemoControlProps> = () => {
  const [isModal, setIsModal] = useState(false);
  const { hanleNewMemo } = useMemo();

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
                  <button
                    onClick={() =>
                      hanleNewMemo({
                        idx: Date.now().toString(),
                        type: 'memo',
                        props: '',
                      })
                    }
                  >
                    Memo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      hanleNewMemo({
                        idx: Date.now().toString(),
                        type: 'todo',
                        props: [],
                      })
                    }
                  >
                    Todo
                  </button>
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
