import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import MemoFeature from '.';

export default {
  title: '메모/Features/Memo',
  component: MemoFeature,
} as ComponentMeta<typeof MemoFeature>;

const template: ComponentStory<typeof MemoFeature> = args => (
  <MemoFeature {...args} />
);

export const Basic = template.bind({});
Basic.args = {};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sleep = await new Promise((resolve) => setTimeout(() => resolve(true), 500));
  await waitFor(async () => {
    // test edit mode
    await expect(canvas.queryByText('삭제')).toBeNull(); // 꼼꼼함을 따지는건 좋지만 이런건 사실 체크할 필요가 있을까
    await userEvent.click(canvas.getByRole('button', { name: '편집' }));
    await expect(canvas.getAllByText('삭제')).toBeTruthy();
    await userEvent.click(canvas.getByRole('button', { name: '편집' }));

    // test modal
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
    expect(canvas.getByText('Add Memo')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {name: '취소'}));
    expect(canvas.queryByText('Add Memo')).toBeNull();
  });
};
