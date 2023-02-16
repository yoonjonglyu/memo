import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MemoItem from './MemoItem';

export default {
  title: '메모/Features/Memo/MemoItem',
  component: MemoItem,
} as ComponentMeta<typeof MemoItem>;

const template: ComponentStory<typeof MemoItem> = args => (
  <MemoItem {...args} />
);

export const Basic = template.bind({});
Basic.args = {
  type: 'todo',
  index: 0,
};
