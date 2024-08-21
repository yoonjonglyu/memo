import { initialize, mswLoader } from 'msw-storybook-addon';
import { RecoilRoot } from 'recoil';

import { handlers } from '../src/mocks/handlers';
import { ModalProvider } from '../src/providers/ModalProvider';

initialize({ onUnhandledRequest: 'bypass' });

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      memo: handlers,
    },
  },
};
export const loaders = [mswLoader];
export const decorators = [
  Story => {
    return (
      <RecoilRoot>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </RecoilRoot>
    );
  },
];
export const tags = ['autodocs'];
