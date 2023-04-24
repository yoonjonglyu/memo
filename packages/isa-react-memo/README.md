# `isa-react-memo`

## Install

1. yarn

```shell
yarn add isa-react-memo
```

2. npm

```shell
npm i isa-react-memo
```

## Usage

```js
import React, {useState} from 'react';
import IsaReactMemo from 'isa-react-memo',

const TestApp = () => {
  const [memo, setMemo] = useState('');
  return (
    <IsaReactMemo type={'memo'} value={memo} onChange={(e) => setMemo(e.target.value)} />
  );
};
```

## Props

1. `type`: memo or todo select components type.

### MemoProps

1. `value: string;`
2. `onChange: React.ChangeEventHandler<HTMLTextAreaElement>;`
3. `containerProps?: React.HTMLAttributes<HTMLDivElement>;`
4. `textAreaProps?: React.HTMLAttributes<HTMLTextAreaElement>;`

### TodoProps

1. `todoItem: Array<{ isAvail: boolean; todo: string }>;`
2. `addItemHandler: (todo: string) => void;`
3. `checkItemHandler: (idx: number) => void;`
4. `deleteItemHandler: (idx: number) => void;`
5. `containerProps?: React.HTMLAttributes<HTMLDivElement>;`
6. `inputProps?: React.HTMLAttributes<HTMLInputElement>;`
7. `listProps?: React.HTMLAttributes<HTMLUListElement>;`

## LICENSE

`MIT`
