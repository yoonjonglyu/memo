import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
