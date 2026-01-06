import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import BoardLayout from './BoardLayout';
import MemoItem from '../../features/memo/MemoItem';

const meta: Meta<typeof BoardLayout> = {
  title: '메모/레이아웃/보드',
  component: BoardLayout,
};
export default meta;
type Story = StoryObj<typeof BoardLayout>;

const Dummy = (
  <div className="inline-block w-full break-inside-avoid mb-6">
    <MemoItem
      index={1}
      type={'memo'}
      props={'test'}
      isEdit={false}
      // 리뉴얼될 MemoItem에서 사용할 컬러 타입 전달
      blockColor={'m'}
    />
  </div>
);
const Dummy2 = (
  <div className="inline-block w-full break-inside-avoid mb-6">
    <MemoItem
      index={2}
      type={'draft'}
      props={'test2'}
      isEdit={false}
      // 리뉴얼될 MemoItem에서 사용할 컬러 타입 전달
      blockColor={'o'}
    />
  </div>
);
export const Basic = {
  args: {
    children: Array.from({ length: 8 }, (_, i) => (i % 2 === 0 ? Dummy : Dummy2)),
  },
};
