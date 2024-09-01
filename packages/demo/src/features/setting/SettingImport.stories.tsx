import React from 'react';
import { Meta, StoryObj } from '@storybook/react/*';

import SettingImport from './SettingImport';

const meta: Meta<typeof SettingImport> = {
  title: '메모/Features/Setting/SettingImport',
  component: SettingImport,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    handleStep: (step: number) => console.log(step),
  },
};
