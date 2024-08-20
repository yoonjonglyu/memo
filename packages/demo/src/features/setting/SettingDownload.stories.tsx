import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import SettingDownload from './SettingDownload';

const meta: Meta<typeof SettingDownload> = {
  title: '메모/Features/Setting/SettingDownload',
  component: SettingDownload,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    handleStep: (a: any) => console.log(a),
  },
};
