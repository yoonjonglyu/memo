import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import MemoModal from './MemoModal';

const meta: Meta<typeof MemoModal> = {
  title: '메모/Features/Memo/MemoModal',
  component: MemoModal,
};
export default meta;
type Story = StoryObj<typeof MemoModal>;
export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // open modal
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
    expect(canvas.getByText('Add Memo')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', { name: '취소' }));
    expect(canvas.queryByText('Add Memo')).toBeNull();
  },
};
