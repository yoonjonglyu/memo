import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import SettingExport from './SettingExport';

const meta: Meta<typeof SettingExport> = {
  title: '메모/Features/Setting/SettingExport',
  component: SettingExport,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
