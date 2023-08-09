import React, { useState } from 'react';
import NavBar from './Navbar';
import Dashboard from './Dashboard';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setCurrentView('dashboard');
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
    setCurrentView('dashboard');
    setSelectedTask(null);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null);
    setCurrentView('dashboard');
  };

  return (
    <div className="app">
      <NavBar setCurrentView={setCurrentView} />
      {currentView === 'dashboard' && (
        <Dashboard
          tasks={tasks}
          onSelectTask={setSelectedTask}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'create' && (
        <TaskForm
          onSaveTask={addTask}
          onCancel={() => setCurrentView('dashboard')}
        />
      )}
      {currentView === 'edit' && selectedTask && (
        <TaskForm
          task={selectedTask}
          onSaveTask={updateTask}
          onCancel={() => setCurrentView('dashboard')}
        />
      )}
    </div>
  );
}

export default App;