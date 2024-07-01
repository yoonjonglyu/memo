import React from 'react';
import { RecoilRoot } from 'recoil';

import IndexPage from './pages';

import { ModalProvider } from './providers/ModalProvider';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ModalProvider>
        <IndexPage />
      </ModalProvider>
    </RecoilRoot>
  );
};

export default App;
