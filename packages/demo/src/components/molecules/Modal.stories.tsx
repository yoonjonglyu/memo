import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: '메모/Ui/Molecules/Modal',
  component: Modal,
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Basic: Story = {
  args : {
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
  }
}
