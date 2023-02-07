import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import BoardLayout from './BoardLayout';

export default {
  title: '메모/레이아웃/보드',
  component: BoardLayout,
} as ComponentMeta<typeof BoardLayout>;

const template: ComponentStory<typeof BoardLayout> = args => (
  <BoardLayout {...args} />
);

export const Basic = template.bind({});
Basic.args = {
  children: <><div>a</div><div>b</div><div>c</div></>,
};
