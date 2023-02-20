import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RecoilRoot } from 'recoil';

import { handlers } from '../src/mocks/handlers';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      memo: handlers
    },
  },
};
export const decorators = [
  mswDecorator,
  Story => {
    return (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    );
  },
];
