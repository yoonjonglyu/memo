import React from 'react';
import { RecoilRoot } from 'recoil';

import MemoFeature from './features/memo';

import { ModalProvider } from './providers/ModalProvider';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ModalProvider>
        <MemoFeature />
      </ModalProvider>
    </RecoilRoot>
  );
};

export default App;
