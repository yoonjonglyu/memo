import React, { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * 모달 포탈을 컨텍스트로 관리해야 할 이유는 크게 없습니다.
 * 사실 글로벌 state에 속하기에 상태관리 도구를 사용해도 큰 상관은 없다고 생각들긴 하지만
 * 모달 컴포넌트에 대한 내용을 jsx으로 통일적으로 처리하려면 아래와 같은 구조를 가지는게
 * 좋습니다. 상태관리도구의 경우 컴포넌트 내부에서 hook을 호출하는 방법으로 모달을 조작해야합니다.
 */
const ModalContext = createContext<HTMLDivElement | null>(null);

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);
  return (
    <ModalContext.Provider value={portal}>
      {children}
      <div
        id="modal-container"
        ref={element => {
          if (portal === null && element !== null) setPortal(element);
        }}
      />
    </ModalContext.Provider>
  );
};

export interface ModalPortalProps {
  children: React.ReactNode;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  return (
    <ModalContext.Consumer>
      {portal => (portal !== null ? createPortal(children, portal) : null)}
    </ModalContext.Consumer>
  );
};
