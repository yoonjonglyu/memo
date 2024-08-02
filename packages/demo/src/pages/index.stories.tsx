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
      await expect(canvas.queryByText('삭제')).toBeNull(); // 꼼꼼함을 따지는건 좋지만 이런건 사실 체크할 필요가 있을까
      await userEvent.click(canvas.getByRole('button', { name: '편집' }));
      await expect(canvas.getAllByText('삭제')).toBeTruthy();
      await userEvent.click(canvas.getByRole('button', { name: '편집' }));

      // test modal
      await userEvent.click(canvas.getByRole('button', { name: '+' }));
      expect(canvas.getByText('Add Memo')).toBeInTheDocument();
      await userEvent.click(canvas.getByRole('button', { name: '취소' }));
      expect(canvas.queryByText('Add Memo')).toBeNull();
    });
  },
};
