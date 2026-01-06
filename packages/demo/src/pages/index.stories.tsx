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
      const editButton = await canvas.findByRole('button', { name: 'edit' });
      await userEvent.click(editButton);
      const deleteButtons = await canvas.findAllByLabelText('delete-item');
      expect(deleteButtons.length).toBeGreaterThan(0);
      await userEvent.click(editButton);
      await expect(canvas.queryByLabelText('delete-item')).toBeNull();
      await userEvent.click(canvas.getByRole('button', { name: 'setting' }));
      await expect(canvas.queryByText('Setting')).toBeTruthy();
      await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }));
      await expect(canvas.queryByText('Setting')).toBeNull();
      // test modal
      await userEvent.click(canvas.getByRole('button', { name: 'add-memo' }));
      expect(canvas.getByText('ADD NEW BLOCK')).toBeInTheDocument();
      await userEvent.click(canvas.getByRole('button', { name: 'CANCEL' }));
      expect(canvas.queryByText('ADD NEW BLOCK')).toBeNull();
    });
  },
};
