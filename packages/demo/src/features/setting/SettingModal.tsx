import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';

import { ModalPortal } from '../../providers/ModalProvider';

const ModalList = styled.ul`
  margin: 6px auto;
  padding: 0;
  list-style: none;
  & li {
    margin: 8px 0;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #47429b;
  background: #a5a0f8;
  border: none;
  border-radius: 3px;
  padding: 18px 8px;
  font-size: 1.2rem;
`;

export interface SettingModalProps {}

const SettingModal: React.FC<SettingModalProps> = () => {
  return (
    <ModalPortal>
      <Modal
        header="Setting"
        children={
          <ModalList>
            <li>
              <Button disabled={true} style={{ opacity: '0.5' }}>
                Sync
              </Button>
            </li>
            <li>
              <Button>Export</Button>
            </li>
            <li>
              <p>Info(contract)</p>
            </li>
          </ModalList>
        }
        footer={<button>취소</button>}
      />
    </ModalPortal>
  );
};

export default SettingModal;
