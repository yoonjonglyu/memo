import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor, expect } from '@storybook/test';

import IndexPage from '.';

const meta: Meta<typeof IndexPage> = {
  title: '메모/Page/Index',
  component: IndexPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sleep = await new Promise(resolve =>
      setTimeout(() => resolve(true), 500)
    );
    await waitFor(async () => {
      // test edit mode
      await expect(canvas.queryByLabelText('delete')).toBeNull(); 
      await userEvent.click(canvas.getByRole('button', { name: 'edit' }));
      await expect(canvas.getAllByLabelText('delete')).toBeTruthy();
      await userEvent.click(canvas.getByRole('button', { name: 'edit' }));
      await expect(canvas.queryByLabelText('delete')).toBeNull();
      await userEvent.click(canvas.getByRole('button', { name: 'setting' }));
      await expect(canvas.queryByText('Export')).toBeTruthy();
      await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }));
      await expect(canvas.queryByText('Export')).toBeNull();
      // test modal
      await userEvent.click(canvas.getByRole('button', { name: '+' }));
      expect(canvas.getByText('Add Memo')).toBeInTheDocument();
      await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }));
      expect(canvas.queryByText('Add Memo')).toBeNull();
    });
  },
};
