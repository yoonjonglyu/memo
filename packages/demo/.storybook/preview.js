import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RecoilRoot } from 'recoil';

import { handlers } from '../src/mocks/handlers';
import { ModalProvider } from '../src/providers/ModalProvider';

initialize();

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
export const decorators = [
  mswDecorator,
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
