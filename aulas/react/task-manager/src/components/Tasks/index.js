import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Tasks.css';

export default function Tasks({ handleDelete, handleEdit, tasks }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task} className="task">
          {task}
          <span className="buttons-container">
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose className="delete" onClick={(e) => handleDelete(e, index)} />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
