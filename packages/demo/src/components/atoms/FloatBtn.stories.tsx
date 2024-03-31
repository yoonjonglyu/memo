import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import FloatBtn from './FloatBtn';

const meta: Meta<typeof FloatBtn> = {
  title: '메모/Ui/Atoms/FloatBtn',
  component: FloatBtn,
};
export default meta;
type Story = StoryObj<typeof FloatBtn>;

export const Basic: Story = {};
