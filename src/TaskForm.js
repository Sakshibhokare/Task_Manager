import React, { useState, useEffect } from 'react';
import './TaskForm.css';
function TaskForm({ task, onSaveTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate.trim()) return;
    const newTask = {
      id: task ? task.id : Date.now(),
      title,
      description,
      dueDate,
    };
    onSaveTask(newTask);
  };

  return (
    <div className="task-form">
      <h2>{task ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default TaskForm;

