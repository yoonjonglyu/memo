import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import H5 from './H5';

const meta: Meta<typeof H5> = {
  title: '메모/Ui/molecules/H5',
  component: H5,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'H5 타이틀 입니다.',
    setValue: (state: string) => console.log(state),
  },
};
