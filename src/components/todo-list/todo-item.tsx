import React, { useCallback } from 'react';
import { Todo, TodoAction } from '../../types';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux'

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<Dispatch<TodoAction>>();

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: {
        id,
      },
    });
  }, [dispatch]);
 
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
