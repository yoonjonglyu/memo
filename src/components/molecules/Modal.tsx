import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  inset-inline: 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgb(0, 0, 0, 0.45);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 360px;
  width: 100%;
  min-height: 200px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0.5px 0.5px black, 0.5px 0.5px black;
`;
const ModalHeader = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
const ModalBody = styled.div`
  flex: 1;
  padding: 6px 8px;
`;
const ModalFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-top: 1px solid rgb(0, 0, 0, 0.2);
`;

export interface ModalProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ header, children, footer }) => {
  return (
    <Background>
      <ModalContainer>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
