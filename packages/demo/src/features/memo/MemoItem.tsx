import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import Memo from '../../components/organisms/Memo';
import Todo, { TodoValueProps } from '../../components/organisms/Todo';
import Note, { NoteValueProps } from '../../components/organisms/Note';
import useMemo from '../../hooks/useMemo';

const ItemBox = styled.div<{ isEdit: boolean }>`
  position: relative;
  max-width: 240px;
  width: 100%;
  opacity: ${({ isEdit }) => (isEdit ? '84%' : '100%')};
  @media screen and (max-width: 920px) {
    max-width: unset;
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 6px 0;
  color: #fff;
  border: 1px solid gray;
  border-radius: 3px;
  background: #e94f4f;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 2px 1px, rgb(0 0 0 / 30%) 0px 4px 10px;
`;

export interface MemoItemProps {
  index: number;
  type: 'memo' | 'todo' | 'note';
  props: string | Array<TodoValueProps> | Array<NoteValueProps>; // 보통 이런 예약어는 커스텀해서 안쓰는게 좋다.
  isEdit: boolean;
}

// props가 너무 길어지면 컴포넌트 내부에서 구조분해 할당하는게 보통 보기 좋다.
const MemoItem: React.FC<MemoItemProps> = ({ index, type, props, isEdit }) => {
  const {
    handleMemo,
    handleDeleteMemo,
    handleAddTodo,
    handleCheckTodo,
    handleDeleteTodo,
    handleNote,
    handleAddNoteItem,
    handleDeleteNoteItem,
  } = useMemo();

  return (
    <ItemBox isEdit={isEdit}>
      {type === 'memo' && (
        <Memo
          value={props as string}
          onChange={e => handleMemo(index, e.target.value)}
        />
      )}
      {type === 'todo' && (
        <Todo
          todoItem={props as Array<TodoValueProps>}
          addItemHandler={todo => handleAddTodo(index, todo)}
          checkItemHandler={idx => handleCheckTodo(index, idx)}
          deleteItemHandler={idx => handleDeleteTodo(index, idx)}
        />
      )}
      {type === 'note' && (
        <Note
          value={props as Array<NoteValueProps>}
          setValue={(cdx: number, value: NoteValueProps) =>
            handleNote(index, cdx, value)
          }
          func={{
            Enter: (idx: number) => handleAddNoteItem(index, idx, 'p'),
          }}
          deleteItemHandler={idx => handleDeleteNoteItem(index, idx)}
        />
      )}
      {isEdit ? (
        <Button onClick={() => handleDeleteMemo(index)} aria-label="delete"><FontAwesomeIcon icon={faTrashCan} /></Button>
      ) : null}
    </ItemBox>
  );
};

export default MemoItem;
