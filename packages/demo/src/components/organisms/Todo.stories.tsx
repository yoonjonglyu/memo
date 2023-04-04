import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Todo from './Todo';

export default {
  title: '메모/Ui/Organisms/Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

const template: ComponentStory<typeof Todo> = args => {
  const [todoItem, setTodoItem] = useState([
    { isAvail: false, todo: '네모를 그려보자' },
    { isAvail: true, todo: '세모를 그려보자' },
    { isAvail: false, todo: '니모를 그려보자' },
    { isAvail: true, todo: '여러가지 모양의 모모를 그려보자' },
  ]);

  const deepCopy = (arr: Array<any>) => JSON.parse(JSON.stringify(arr));

  return (
    <Todo
      {...args}
      todoItem={todoItem}
      addItemHandler={todo =>
        setTodoItem(prev => [...prev, { isAvail: false, todo: todo }])
      }
      checkItemHandler={idx =>
        setTodoItem(prev => {
          const next = deepCopy(prev);
          next[idx].isAvail = !next[idx].isAvail;
          return next;
        })
      }
      deleteItemHandler={idx =>
        setTodoItem(prev => [
          ...prev.slice(0, idx),
          ...prev.slice(idx + 1, prev.length),
        ])
      }
    />
  );
};

export const Basic = template.bind({});
Basic.args = {
  todoItem: [
    { isAvail: false, todo: '네모를 그려보자' },
    { isAvail: true, todo: '세모를 그려보자' },
    { isAvail: false, todo: '니모를 그려보자' },
    { isAvail: true, todo: '여러가지 모양의 모모를 그려보자' },
  ],
};
/**
 * 스토리 내부에서 작은 단위로 테스트를 쪼갤 수 없는건 조금 아쉬운점이다.
 * 다만 인터렉션이라는 점에 집중한다면 전체적인 흐름 자체를 하나의 스토리에 대응되게
 * 해야하니 딱히 틀린 것은 아닌 것 같다.
 */
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // add Todo
  expect(canvas.queryByText('testTodo')).toBeNull();
  await userEvent.type(canvas.getByRole('textbox'), 'testTodo');
  await userEvent.keyboard('{Enter}');
  expect(canvas.getByText('testTodo')).toBeInTheDocument();

  // check Todo
  expect(
    canvas.getByText('testTodo').querySelector('input')?.checked
  ).toBeFalsy();
  await userEvent.click(canvas.getByText('testTodo').children[0]);
  expect(
    canvas.getByText('testTodo').querySelector('input')?.checked
  ).toBeTruthy();

  // delect Todo
  expect(canvas.queryByText('testTodo')).toBeInTheDocument();
  await userEvent.click(canvas.getByText('testTodo').children[1]);
  expect(canvas.queryByText('testTodo')).toBeNull();
};
