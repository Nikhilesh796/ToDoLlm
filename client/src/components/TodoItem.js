import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    onUpdate(todo.id, { title: newTitle });
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
    {isEditing ? (
        <>
        <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
        />
        <div className="actions">
            <button onClick={handleSave}>💾</button>
        </div>
        </>
    ) : (
        <>
        <span>{todo.title}</span>
        <div className="actions">
            <button onClick={handleEdit}>✏️</button>
            <button onClick={() => onDelete(todo.id)}>❌</button>
        </div>
        </>
    )}
    </li>
  );
};

export default TodoItem;
