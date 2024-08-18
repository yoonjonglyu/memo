import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import RemoveButton from './RemoveButton';

const meta: Meta<typeof RemoveButton> = {
  title: '메모/Ui/Molecules/RemoveButton',
  component: RemoveButton,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onClick: () => alert('click'),
  },
};
