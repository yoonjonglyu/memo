import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Note from './Note';

const meta: Meta<typeof Note> = {
  title: '메모/Ui/Organisms/Note',
  component: Note,
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * p태그랑 h태그만 만들고 custom hooks으로 타이핑에 따른 유틸함수를 만들어서 연결해본다.
 * 어노테이션 중 웹 어노테이션만 문서화하는구나 ㅎㅎ;
 */
export const Basic: Story = {
  args: {
    value: [
      { idx: 0, type: 'h1', value: 'test' },
      { idx: 0, type: 'h2', value: 'test' },
      { idx: 0, type: 'h3', value: 'test' },
      { idx: 0, type: 'p', value: 'test' },
    ],
    setValue: () => {},
    func: { Enter: () => {} },
    addItemHandler: idx => console.log(idx),
    deleteItemHandler: idx => console.log(idx),
  },
};
