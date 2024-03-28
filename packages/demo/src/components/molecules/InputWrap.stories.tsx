import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputWrap from './InputWrap';

export default {
  title: '메모/Ui/Molecules/InputWrap',
  component: InputWrap,
} as ComponentMeta<typeof InputWrap>;

const teamplte: ComponentStory<typeof InputWrap> = args => (
  <InputWrap {...args} />
);

export const Basic = teamplte.bind({});
Basic.args = {};
