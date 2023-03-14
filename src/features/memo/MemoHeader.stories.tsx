import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MemoHeader from './MemoHeader';

export default {
  title: '메모/Features/Memo/MemoHeader',
  component: MemoHeader,
} as ComponentMeta<typeof MemoHeader>;

const template: ComponentStory<typeof MemoHeader> = args => (
  <MemoHeader {...args} />
);

export const Basic = template.bind({});
Basic.args = {
  handleEdit: () => alert('편집모드 시작'),
};
