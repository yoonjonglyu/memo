import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, fn } from '@storybook/test';

import MemoHeader from './MemoHeader';

const meta: Meta<typeof MemoHeader> = {
  title: '메모/Features/Memo/MemoHeader',
  component: MemoHeader,
};
export default meta;
type Story = StoryObj<typeof MemoHeader>;
// 스모크 테스트 = 스냅샷 + UI테스트(어차피 눈으로 확인해야함)
// 인터랙션 테스트 = 기능 및 로직에 대한 테스트
const handleEdit = fn();
const handleSetting = fn();
export const Basic: Story = {
  args: {
    handleEdit: handleEdit,
    handleSetting: handleSetting,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'edit' }));
    await userEvent.click(canvas.getByRole('button', { name: 'setting' }));
    expect(handleEdit).toBeCalled();
    expect(handleSetting).toBeCalled();
  },
};
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import MemoHeader from './MemoHeader';

// describe('MemoHeader', () => {
//   it('renders the title and edit button', () => {
//     const handleEdit = jest.fn();
//     render(<MemoHeader handleEdit={handleEdit} />);
//     const title = screen.getByText('Memo');
//     const editButton = screen.getByRole('button', { name: '편집' });
//     expect(title).toBeInTheDocument();
//     expect(editButton).toBeInTheDocument();
//   });

//   it('calls handleEdit when edit button is clicked', () => {
//     const handleEdit = jest.fn();
//     render(<MemoHeader handleEdit={handleEdit} />);
//     const editButton = screen.getByRole('button', { name: '편집' });
//     fireEvent.click(editButton);
//     expect(handleEdit).toHaveBeenCalled();
//   });
// });
