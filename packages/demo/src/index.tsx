import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/worker');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const Root = document.querySelector('#app');
if (Root !== null) {
  enableMocking().then(() => {
    createRoot(Root).render(<App />);
  });
} else console.error('루트 node를 찾을 수 없습니다.');
