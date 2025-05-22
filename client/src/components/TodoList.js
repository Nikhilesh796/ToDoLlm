import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onUpdate }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
    ))}
  </ul>
);


export default TodoList;
