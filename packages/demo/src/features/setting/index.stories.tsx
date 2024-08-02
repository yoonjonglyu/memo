import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import SettingFeature from '.';

const meta: Meta<typeof SettingFeature> = {
  title: '메모/Features/Setting',
  component: SettingFeature,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    isModal: true,
    closeModal: () => console.log('close'),
  },
};
