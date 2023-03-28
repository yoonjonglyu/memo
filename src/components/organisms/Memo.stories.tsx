import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Memo from './Memo';

export default {
  title: '메모/UI/Organisms/메모',
  component: Memo,
} as ComponentMeta<typeof Memo>;
/**
 * 스토리북과 연계한 인터렉션 테스트에 대한 부분은 고민 해볼 포인트가 많다.
 * 일단 사실 해당 기술 스택에 대한 양질의 자료가 부족한점이 제일 크고 ㅎㅎ
 * jest와 react-test-library를 활용한다는 측면에서는 동일하지만 storybook이라는 환경을
 * 추가적으로 고려했을때 컴포넌트를 어느 범주부터 테스트를 해야할지?
 * 또는 각 인프라에서 어디서 어디까지관리를 할지 등?
 * 부분들 일단 스모크 테스트라는 부분이 있으므로 컴포넌트에 대한 UI나 간단한 동작 테스트의 경우
 * 스토리북과 스토리북 테스트러너를 그대로 활용하는게 적절하다고 판단된다.
 * 결국 인터렉션이라고 볼 수 있는 동작을 검증해야하는 컴포넌트 수준에서나
 * 추가적인 인터랙션에 대한 테스트를 추가할 필요가 있는데
 * 보통 jest가 가진 mock등 기능을 스토리북을 활용한다 해서 사용하지 못하는 것은 아니나
 * 기본적으로 스토리의 args와 연결해서 보면 jest에서 관리 했을시 적절치 못한 점들이 있다.
 * 그런 점들은 아래와 같이 스토리북에서 부터 환경을 제공하는게 맞다고 생각된다.
 */
const template: ComponentStory<typeof Memo> = args => {
  const [value, setValue] = useState('');

  return (
    <Memo {...args} value={value} onChange={e => setValue(e.target.value)} />
  );
};

export const Basic = template.bind({});
Basic.args = {};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(canvas.getByRole('textbox'), '메모를 해보자.');
  expect(canvas.getByText('메모를 해보자.')).toBeInTheDocument();
};
