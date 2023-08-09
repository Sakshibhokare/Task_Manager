import React from 'react';
import './taskItem.css';

function TaskItem({ task, onSelect, onDelete }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={onSelect}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;










// import React from 'react';

// function TaskItem({ task, onEdit, onDelete }) {
//   return (
//     <div>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <p>Due Date: {task.dueDate}</p>
//       <button onClick={onEdit}>Edit</button>
//       <button onClick={onDelete}>Delete</button>
//     </div>
//   );
// }

// export default TaskItem;
