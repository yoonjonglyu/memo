import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ExitModal from './ExitModal';

const meta: Meta<typeof ExitModal> = {
  title: '메모/UI/Organisms/ExitModal',
  component: ExitModal,
};
export default meta;
type Story = StoryObj<typeof ExitModal>;

export const Basic: Story = {
  args: {
    onClose: () => alert('stay.'),
  },
};
