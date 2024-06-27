import React from 'react';
import { Todo } from '../../types';

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => (
  <div>
    <span>{todo.text}</span>
    <button onClick={() => removeTodo(todo.id)}>Remove</button>
  </div>
);

export default TodoItem;
