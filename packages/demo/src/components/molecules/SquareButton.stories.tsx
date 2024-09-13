import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import SquareButton from './SquareButton';

const meta: Meta<typeof SquareButton> = {
  title: '메모/Ui/Molecules/SquareButton',
  component: SquareButton,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Add: Story = {
  args: {
    iconType: 'add',
    onClick: () => alert('click'),
  },
};
export const Remove: Story = {
  args: {
    iconType: 'remove',
    onClick: () => alert('click'),
  },
};
export const Menu: Story = {
  args: {
    iconType: 'menu',
    onClick: () => alert('click'),
  },
};
