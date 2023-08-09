import React from 'react';

function NavBar({ setCurrentView }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => setCurrentView('dashboard')}>Dashboard</button>
        </li>
        <li>
          <button onClick={() => setCurrentView('create')}>Create Task</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

