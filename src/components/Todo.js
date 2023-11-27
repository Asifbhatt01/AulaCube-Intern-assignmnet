import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, toggleCheckbox }) => {
  const [priority, setPriority] = useState(task.priority || 'low'); // Initialize with existing priority or 'low'

  const handlePriorityChange = (event) => {
    const newPriority = event.target.value;
    setPriority(newPriority);
    // You may want to save the new priority to your state or perform other actions here
  };

  return (
    <div className="Todo">
      <div>
        <input
          type="checkbox"
          className="checkbox-icon"
          checked={task.completed}
          onClick={() => toggleComplete(task.id)}
        />
        <p className={`${task.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleCheckbox(task.id)}>
          {task.task}
        </p>
      </div>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />

        {/* Priority Dropdown */}
        <select value={priority} onChange={handlePriorityChange}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
    </div>
  );
};
