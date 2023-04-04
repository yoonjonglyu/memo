import React, { useState } from 'react';
import styled from 'styled-components';

import FloatBtn from '../../components/atoms/FloatBtn';
import Modal from '../../components/molecules/Modal';

import { ModalPortal } from '../../providers/ModalProvider';
import useMemo from '../../hooks/useMemo';

const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #47429b;
  background: #a5a0f8;
  border: none;
  border-radius: 3px;
`;

export interface MemoModalProps {}

const MemoModal: React.FC<MemoModalProps> = () => {
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
            <ModalContents handleCloseModal={() => setIsModal(false)} />
          }
          footer={<Button onClick={() => setIsModal(false)}>취소</Button>}
        />
      ) : null}
    </ModalPortal>
  );
};

const SubText = styled.strong`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a4a4a;
`;
const ModalList = styled.ul`
  margin: 6px auto;
  padding: 0;
  list-style: none;
  & li {
    margin: 8px 0;
  }
`;
const ModalButton = styled(Button)`
  padding: 18px 8px;
  font-size: 1.2rem;
`;
/**
 * 관심사 분리는 중요하다. 그렇다고 너무 세세하게 쪼개는 것은 역시 적절한 관심사 분리라고 보긴힘들다.
 * 결국 목적은 (이해하기 쉽고)유지보수하기 편한 코드를 작성하는 것이니 비슷한 관심사이며 재사용성이 낮을 경우
 * 같은 파일에서 관리 하는 것이 더 알아보기 쉽기 때문에 이런 구조를 취하기도한다. 렌더훅 같은 경우 성능적인 차이가 있어서 따로 컴포넌트로
 * 빼주는게 보통 더 좋기도 하다.
 * 이 경우는 위의 모달 컴포넌트는 플롯버튼 이벤트로 모달을 호출하는 관심사를 가지고 아래 컨텐츠는 그 모달의 내용에 해당한다.
 * 그리고 이 파일 자체는 MemoModal이라는 이름처럼 메모라는 도메인의 모달이라는 관심사를 가진다고 간략하게 설명 할 수 있다.
 */
interface ModalContentsProps {
  handleCloseModal: VoidFunction;
}

const ModalContents: React.FC<ModalContentsProps> = ({ handleCloseModal }) => {
  const { hanleNewMemo } = useMemo();
  return (
    <>
      <SubText>Select Memo Type</SubText>
      <ModalList>
        <li>
          <ModalButton
            onClick={() => {
              hanleNewMemo({
                idx: Date.now().toString(),
                type: 'memo',
                props: '',
              });
              handleCloseModal();
            }}
          >
            Memo
          </ModalButton>
        </li>
        <li>
          <ModalButton
            onClick={() => {
              hanleNewMemo({
                idx: Date.now().toString(),
                type: 'todo',
                props: [],
              });
              handleCloseModal();
            }}
          >
            Todo
          </ModalButton>
        </li>
      </ModalList>
    </>
  );
};

export default MemoModal;
