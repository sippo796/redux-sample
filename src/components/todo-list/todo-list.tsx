import React, { useCallback, useState } from 'react';
import TodoItem from './todo-item';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import { TodoAction, Todo } from '../../types'
import { RootStore } from '../../store';

const TodoList: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<Dispatch<TodoAction>>();
  const todos = useSelector<RootStore, Todo[]>((state: RootStore) => state.todo.todos);

  const handleAdd = useCallback(() => {
    dispatch({
      type: 'ADD_TODO',
      payload:{
        id: Date.now(),
        text,
    }});
    setText('');
  }, [dispatch, text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
