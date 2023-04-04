import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MemoBox from './MemoBox';

export default {
  title: '메모/Ui/Atoms/MemoBox',
  component: MemoBox,
} as ComponentMeta<typeof MemoBox>;

const template: ComponentStory<typeof MemoBox> = args => <MemoBox {...args} />;

export const Basic = template.bind({});
Basic.args = {
  children: <h3>메모 박스와 children</h3>
};
