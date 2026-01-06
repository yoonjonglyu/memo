import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import Draft from './Draft';

const meta: Meta<typeof Draft> = {
  title: '메모/UI/Organisms/Draft',
  component: Draft,
};
export default meta;
type Story = StoryObj<typeof Draft>;

export const Basic: Story = {
  args: {
    value: '메모를 해보자.',
  },
  render: args => {
    const [value, setValue] = useState('');

    return (
      <Draft {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), '메모를 해보자.');
    
    expect(canvas.getByText('메모를 해보자.')).toBeInTheDocument();
  },
};
