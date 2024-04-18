import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import H6 from './H6';

const meta: Meta<typeof H6> = {
  title: '메모/Ui/molecules/H6',
  component: H6,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'H6 타이틀 입니다.',
    setValue: (state: string) => console.log(state),
  },
};
