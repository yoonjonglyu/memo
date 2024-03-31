import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import MemoBox from './MemoBox';

const meta: Meta<typeof MemoBox> = {
  title: '메모/Ui/Atoms/MemoBox',
  component: MemoBox,
};
export default meta;

type Story = StoryObj<typeof MemoBox>;
export const Basic: Story = {
  args: {
    children: <h3>메모 박스와 children</h3>,
  },
};
