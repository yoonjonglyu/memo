import React, { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

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
