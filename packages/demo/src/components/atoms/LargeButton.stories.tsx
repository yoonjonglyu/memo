import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import LargeButton from './LargeButton';

const meta: Meta<typeof LargeButton> = {
  title: '메모/Ui/Atoms/LargeButton',
  component: LargeButton,
};

export default meta;

type Story = StoryObj<typeof LargeButton>;
export const Basic: Story = {
  args: { children: 'LargeButton' },
};
