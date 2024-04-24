import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import H3 from './H3';

const meta: Meta<typeof H3> = {
  title: '메모/Ui/Molecules/H3',
  component: H3,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'H3 타이틀 입니다.',
    setValue: (state: string) => console.log(state),
    func: {
      Enter: (e: any) => alert(e.target.textContent),
    },
  },
};
