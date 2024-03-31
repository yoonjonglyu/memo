import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import Todo from './Todo';

const meta: Meta<typeof Todo> = {
  title: '메모/Ui/Organisms/Todo',
  component: Todo,
};
export default meta;
type Story = StoryObj<typeof Todo>;

export const Basic: Story = {
  args: {
    todoItem: [
      { isAvail: false, todo: '네모를 그려보자' },
      { isAvail: true, todo: '세모를 그려보자' },
      { isAvail: false, todo: '니모를 그려보자' },
      { isAvail: true, todo: '여러가지 모양의 모모를 그려보자' },
    ],
  },
  render: args => {
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
  },
  play: async ({ canvasElement }) => {
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
  },
};
