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
  render: args => (
    <>
      <PInput {...args} />
      <PInput {...args} />
    </>
  ),
};
