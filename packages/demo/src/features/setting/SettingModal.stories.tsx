import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import SettingModal from './SettingModal';

const meta: Meta<typeof SettingModal> = {
  title: '메모/Features/Setting/SettingModal',
  component: SettingModal,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    handleStep: (a: any) => console.log(a),
    closeModal: () => console.log('close'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
