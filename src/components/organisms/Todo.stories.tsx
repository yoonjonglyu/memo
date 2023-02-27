import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Todo from './Todo';

export default {
  title: '메모/Ui/Organisms/Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

const template: ComponentStory<typeof Todo> = args => <Todo {...args} />;

export const Basic = template.bind({});
Basic.args = {
  todoItem: [
    { isAvail: false, todo: '네모를 그려보자' },
    { isAvail: true, todo: '세모를 그려보자' },
    { isAvail: false, todo: '니모를 그려보자' },
    { isAvail: true, todo: '여러가지 모양의 모모를 그려보자' },
  ],
  addItemHandler: todo => alert(`입력하신 내용은: ${todo}`),
  checkItemHandler: idx => alert(`check 이벤트 발생 ${idx}`),
  deleteItemHandler: idx => alert(`삭제 이벤트 발생 ${idx}`),
};
