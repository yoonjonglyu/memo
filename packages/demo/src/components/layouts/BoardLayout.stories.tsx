import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import BoardLayout from './BoardLayout';
import Memo from '../organisms/Memo';

const meta: Meta<typeof BoardLayout> = {
  title: '메모/레이아웃/보드',
  component: BoardLayout,
};
export default meta;
type Story = StoryObj<typeof BoardLayout>;

const Dummy = (
  <Memo
    value={'1'}
    onChange={() => {
      console.log(1);
    }}
  />
);
export const Basic = {
  args: {
    children: Array.from({ length: 25 }, () => Dummy),
  },
};
