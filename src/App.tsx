import React from 'react';
import { RecoilRoot } from 'recoil';

import { ModalProvider } from './providers/modalProvider';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ModalProvider>app</ModalProvider>
    </RecoilRoot>
  );
};

export default App;
