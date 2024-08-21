import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import InputWrap from './InputWrap';

const meta: Meta<typeof InputWrap> = {
  title: '메모/Ui/Molecules/InputWrap',
  component: InputWrap,
};
export default meta;
type Story = StoryObj<typeof InputWrap>;

export const Basic: Story = {
  args: {
    children: <input  value={'input wrap dumy input children'}/>
  }
};
