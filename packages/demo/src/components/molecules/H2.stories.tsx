import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import H2 from './H2';

const meta: Meta<typeof H2> = {
  title: '메모/Ui/Molecules/H2',
  component: H2,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'H2 타이틀 입니다.',
    setValue: (state: string) => console.log(state),
  },
};
