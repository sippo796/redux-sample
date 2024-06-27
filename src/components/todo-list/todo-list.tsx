import React, { useState } from 'react';
import TodoItem from './todo-item';
import { Todo } from '../../types';

type Props = {
  todos: { id: number; text: string }[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, addTodo, removeTodo }: Props) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    addTodo({
      id: Date.now(),
      text,
    });
    setText('');
  };

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
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
