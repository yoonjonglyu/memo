import React, { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * 모달 포탈을 컨텍스트로 관리해야 할 이유는 크게 없습니다.
 * 사실 글로벌 state에 속하기에 상태관리 도구를 사용해도 큰 상관은 없다고 생각들긴 하지만
 * 모달 컴포넌트에 대한 내용을 jsx으로 통일적으로 처리하려면 아래와 같은 구조를 가지는게
 * 좋습니다. 상태관리도구의 경우 컴포넌트 내부에서 hook을 호출하는 방법으로 모달을 조작해야합니다.
 */
const ModalContext = createContext<HTMLDivElement | null>(null);
/**
 * 프론트엔드에서 타입스크립트를 적용할 경우 타입이나 인터페이스를 사용하게 됩니다. 보통 인터페이스로 표현하는걸 개인적으로 선호하는 편이긴하지만
 * 반드시 interface를 사용할 필요는 없는 것 같습니다. 다만 보통 해당 컴포넌트 이름 + props로 컴포넌트 타입을 명명하는 편인데
 * 아래와 같이 같은 파일(이나 네임스페이스) 내의 공통된 관심사를 가진 컴포넌트들을 묶어서 모듈화 하는 경우가 꽤 있기 때문입니다.
 * 명명 작업에 드는 에너지를 절약하고 충돌문제를 줄일 수 있다는 점에서 나쁘지 않은 컨벤션이라고 생각합니다.
 */
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
