import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import { ModalPortal } from '../../providers/ModalProvider';

const ModalList = styled.ul`
  margin: 6px auto;
  padding: 0;
  list-style: none;
  & li {
    margin: 8px 0;
  }
  & li p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #6c6c6c;
  }
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
              <LargeButton style={{ opacity: '0.5' }} aria-disabled="true">
                Sync
              </LargeButton>
            </li>
            <li>
              <LargeButton>Export</LargeButton>
            </li>
            <li>
              <p>
                <strong>App Info</strong>
                <br />
                <strong>version:</strong> v1.0.1
                <br />
                <strong>email:</strong> yunjonglyu@gmail.com
              </p>
            </li>
          </ModalList>
        }
        footer={<LargeButton>Cancel</LargeButton>}
      />
    </ModalPortal>
  );
};

export default SettingModal;
