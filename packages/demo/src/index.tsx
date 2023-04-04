import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
// 원래 document.body에 바로 root를 잡는건 금지 됩니다. 외부에서 바로 특정 해서 접근이 가능하기에
// 라이브러리 차원에서 경고를 표시하죠.
// createRoot(document.querySelector('#app') || document.body).render(
//   <App />
// );
import { worker } from './mocks/worker';
if(process.env.NODE_ENV === 'development'){
  worker.start();
}

const Root = document.querySelector('#app');
if (Root !== null) {
  createRoot(Root).render(<App />);
} else console.error('루트 node를 찾을 수 없습니다.');
