import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import MemoItem from './MemoItem';

const meta: Meta<typeof MemoItem> = {
  title: '메모/Features/Memo/MemoItem',
  component: MemoItem,
};
export default meta;
type Story = StoryObj<typeof MemoItem>;
/**
 * organisms에서 todo와 memo를 받아서 조건부 렌더링을하고
 * 편집 UI를 통해서 삭제 기능을 하는 부분이 추가적으로는 있는데 정작
 * 편집에 들어가는 부분은 다른 컴포넌트 영역에 속해있다.
 * 해당 컴포넌트의 기능의 경우 이미 organisms에서 테스트했고
 * UI 적인 요소만 있으므로 인터랙션 테스트를 생략한다.
 */
export const Todo: Story = {
  args: {
    type: 'todo',
    index: 0,
    props: [
      { isAvail: true, todo: '장보기' },
      { isAvail: false, todo: '운동하기' },
      {
        isAvail: false,
        todo: '내부적으로 글로벌 상태를 참조하므로 조작이 불가능함',
      },
    ],
    isEdit: false,
  },
};
export const Memo: Story = {
  args: {
    type: 'memo',
    index: 0,
    props:
      '메모 해당 컴포넌트는 feature로 도메인에 특화된 글로벌 상태를 참조하므로 조작이 불가능함',
    isEdit: false,
  },
};

export const Note: Story = {
  args: {
    type: 'note',
    index: 0,
    props: [
      { idx: 0, type: 'h1', value: '타이틀입니다.' },
      { idx: 1, type: 'p', value: 'p입니다.' },
      { idx: 2, type: 'h2', value: 'h2입니다.' },
    ],
    isEdit: false,
  },
};
