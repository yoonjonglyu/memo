import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import BoardLayout from './BoardLayout';
import Memo from '../Memo';

export default {
  title: '메모/레이아웃/보드',
  component: BoardLayout,
} as ComponentMeta<typeof BoardLayout>;

const template: ComponentStory<typeof BoardLayout> = args => (
  <BoardLayout {...args} />
);

const Dummy = (
  <Memo
    value={'1'}
    onChange={() => {
      console.log(1);
    }}
  />
);
export const Basic = template.bind({});
Basic.args = {
  children: Array.from({ length: 25 }, () => Dummy),
};
