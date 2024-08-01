import React from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';

import { ModalPortal } from '../../providers/ModalProvider';

const ModalList = styled.ul`
  margin: 6px auto;
  padding: 0;
  list-style: none;
  & li {
    display: inline-block;
    width: 80px;
    margin: 8px;
  }
  & li p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #6c6c6c;
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

export interface SettingExportProps {}

const SettingExport: React.FC<SettingExportProps> = () => {
  return     <ModalPortal>
  <Modal
    header="Export Type"
    children={
      <ModalList>
        <li>
          <Button>
            JSON
          </Button>
        </li>
        <li>
          <Button>MD</Button>
        </li>
        <li>
          <Button>HTML</Button>
        </li>
      </ModalList>
    }
    footer={<Button>Cancel</Button>}
  />
</ModalPortal>
};

export default SettingExport;
