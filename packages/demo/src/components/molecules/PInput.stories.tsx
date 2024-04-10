import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import PInput from './PInput';
const meta: Meta<typeof PInput> = {
  title: '메모/Ui/Molecules/PInput',
  component: PInput,
};
export default meta;
type Story = StoryObj<typeof PInput>;

export const Basic: Story = {
  args: {
    value: 'p 입니다.',
    setValue: (state: string) => console.log(state),
  },
};
