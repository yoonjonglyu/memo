import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import MemoModal from './MemoModal';

export default {
  title: '메모/Features/Memo/MemoModal',
  component: MemoModal,
} as ComponentMeta<typeof MemoModal>;

const template: ComponentStory<typeof MemoModal> = args => (
  <MemoModal {...args} />
);

export const Basic = template.bind({});
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // open modal
  await userEvent.click(canvas.getByRole('button', { name: '+' }));
  expect(canvas.getByText('Add Memo')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('button', {name: '취소'}));
  expect(canvas.queryByText('Add Memo')).toBeNull();
};