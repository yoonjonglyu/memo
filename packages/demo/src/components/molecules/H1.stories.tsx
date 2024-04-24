import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import H1 from './H1';

const meta: Meta<typeof H1> = {
  title: '메모/Ui/Molecules/H1',
  component: H1,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 'H1 타이틀입니다.',
    setValue: (state: string) => console.log(state),
    func: {
      Enter: (e: any) => alert(e.target.textContent),
    },
  },
};
