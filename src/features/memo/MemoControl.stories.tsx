import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MemoControl from './MemoControl';

export default {
  title: '메모/Features/Memo/MemoControl',
  component: MemoControl,
} as ComponentMeta<typeof MemoControl>;

const template: ComponentStory<typeof MemoControl> = args => (
  <MemoControl {...args} />
);

export const Basic = template.bind({});
