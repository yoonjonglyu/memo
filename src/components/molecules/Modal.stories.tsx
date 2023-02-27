import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './Modal';

export default {
  title: '메모/Ui/Molecules/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Basic = template.bind({});
Basic.args = {
  header: 'Modal',
  children: (
    <>
      <button>a</button>
      <button>b</button>
      <button>c</button>
      모달의 구성에 대한 부분과 스타일링은 외부에서 주입한다.
    </>
  ),
  footer: (
    <>
      <button>확인</button>
      <button>취소</button>
    </>
  ),
};
