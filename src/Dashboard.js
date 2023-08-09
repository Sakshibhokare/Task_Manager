import React from 'react';
import TaskItem from './TaskItem';
import './dashboard.css';

function Dashboard({ tasks, onSelectTask, setCurrentView }) {
  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onSelect={() => {
            onSelectTask(task);
            setCurrentView('edit');
          }}
          onDelete={() => {
            onSelectTask(task);
            setCurrentView('delete');
          }}
        />
      ))}
    </div>
  );
}

export default Dashboard;


