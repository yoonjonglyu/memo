import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MemoModal from './MemoModal';

export default {
  title: '메모/Features/Memo/MemoModal',
  component: MemoModal,
} as ComponentMeta<typeof MemoModal>;

const template: ComponentStory<typeof MemoModal> = args => (
  <MemoModal {...args} />
);

export const Basic = template.bind({});
