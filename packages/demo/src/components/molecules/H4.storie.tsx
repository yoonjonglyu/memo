import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import H4 from './H4';

const meta: Meta<typeof H4> = {
  title: '메모/Ui/molecules/H4',
  component: H4,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'H4 타이틀 입니다.',
    setValue: (state: string) => console.log(state),
    func: {
      Enter: (e: any) => alert(e.target.textContent),
    },
  },
};
