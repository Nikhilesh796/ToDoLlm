import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // adjust if deploying
});

export const fetchTodos = () => API.get('/todos');
export const addTodo = (todo) => API.post('/todos', todo);
export const updateTodo = (id, updatedTodo) => API.put(`/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const summarizeTodos = () => API.post('/summarize');
