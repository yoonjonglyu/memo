import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import NoteNode from './NoteNode';

const meta: Meta<typeof NoteNode> = {
  title: '메모/Ui/Organisms/NoteNode',
  component: NoteNode,
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Baisc: Story = {
  args: {
    type: 'h1',
    value: '타입에 따라 다른 컴포넌트를 렌더링함',
    setValue: () => {},
    func: { Enter: () => {} },
  },
};
