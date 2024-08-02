import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import MemoFeature from '.';

const meta: Meta<typeof MemoFeature> = {
  title: '메모/Features/Memo',
  component: MemoFeature,
};
export default meta;
type Story = StoryObj<typeof MemoFeature>;

export const Basic: Story = {
  args: {},
};
