import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  summarizeTodos,
} from './services/api';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');

  const loadTodos = async () => {
    const res = await fetchTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (todo) => {
    const res = await addTodo(todo);
    setTodos([...todos, res.data]);
  };

  const handleUpdate = async (id, updatedTodo) => {
    const res = await updateTodo(id, updatedTodo);
    setTodos(todos.map(todo => (todo.id === id ? res.data : todo)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSummarize = async () => {
    try {
      const res = await summarizeTodos();
      setStatus(res.data.message);
    } catch (err) {
      setStatus('Failed to send summary to Slack.');
    }
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="container">
      <h1>Todo Summary Assistant 🧠</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
      <button onClick={handleSummarize}>Summarize & Send to Slack</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default App;
