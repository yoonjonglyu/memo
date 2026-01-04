import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import Memo from '../../components/organisms/Memo';
import Todo, { TodoValueProps } from '../../components/organisms/Todo';
import Note, { NoteValueProps } from '../../components/organisms/Note';
import Draft from '../../components/organisms/Draft';

import useMemo from '../../hooks/useMemo';

export interface MemoItemProps {
  index: number;
  type: 'memo' | 'todo' | 'note' | 'draft';
  props: string | Array<TodoValueProps> | Array<NoteValueProps>; // 보통 이런 예약어는 커스텀해서 안쓰는게 좋다.
  isEdit: boolean;
  blockColor?: string;
}

// props가 너무 길어지면 컴포넌트 내부에서 구조분해 할당하는게 보통 보기 좋다.
const MemoItem: React.FC<MemoItemProps> = ({
  index,
  type,
  props,
  isEdit,
  blockColor,
}) => {
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
  // 로고 기반 보더 컬러 매핑
  const borderColors = {
    m: 'border-memo-m',
    o: 'border-memo-o',
    m2: 'border-memo-m2',
    e: 'border-memo-e',
  };

  return (
    <div
      className={`
      relative w-full group transition-all duration-300
      ${isEdit ? 'opacity-80 scale-95' : 'opacity-100'}
    `}
    >
      {/* 테트리스 블록 컨테이너 */}
      <div
        className={`
        bg-white border-l-8 ${
          borderColors[blockColor as keyof typeof borderColors]
        } 
        p-2 min-h-30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] rounded-sm
      `}
      >
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
            blockColor={blockColor as keyof typeof borderColors}
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
            addItemHandler={idx => {
              handleAddNoteItem(index, idx, 'p');
            }}
            deleteItemHandler={idx => handleDeleteNoteItem(index, idx)}
            blockColor={blockColor as keyof typeof borderColors}
          />
        )}
        {type === 'draft' && (
          <Draft
            value={props as string}
            onChange={e => handleMemo(index, e.target.value)}
          />
        )}
      </div>

      {/* 삭제 버튼: 테트리스 블록이 파괴되는 느낌의 레드 */}
      {isEdit && (
        <button
          onClick={() => handleDeleteMemo(index)}
          className="absolute -bottom-2 -right-2 w-10 h-10 bg-memo-e text-white border-2 border-gray-800 shadow-md rounded-none flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      )}
    </div>
  );
};

export default MemoItem;
