import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Memo from './Memo';

export default {
  title: '메모/UI/Organisms/메모',
  component: Memo,
} as ComponentMeta<typeof Memo>;

const template: ComponentStory<typeof Memo> = args => <Memo {...args} />;

export const Basic = template.bind({});
Basic.args = {
  value: '메모를 해보자.',
  onChange: () => alert('메모의 value와 onChange는 props')
};
