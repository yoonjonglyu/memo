import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import SortSwitch from './SortSwitch';

const meta: Meta<typeof SortSwitch> = {
  title: '메모/Ui/Molecules/SortSwitch',
  component: SortSwitch,
};
export default meta;
type Story = StoryObj<typeof SortSwitch>;

export const Basic: Story = {
  args: {
    sortType: 'latest'
  },
};
