import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FloatBtn from './FloatBtn';

export default {
  title: '메모/Ui/Atoms/FloatBtn',
  component: FloatBtn,
} as ComponentMeta<typeof FloatBtn>;

const teamplte: ComponentStory<typeof FloatBtn> = args => (
  <FloatBtn {...args} />
);

export const Basic = teamplte.bind({});
Basic.args = {};
