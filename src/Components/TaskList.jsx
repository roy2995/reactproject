// src/Components/TaskList.jsx
import React from 'react';

const TaskList = ({ tasks, handleTaskChange }) => {
  return (
    <div>
      <label className="block text-lg font-semibold text-gray-700 mb-2">Lista de Verificación de Limpieza</label>
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskChange(index)}
            className="mr-3 h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 rounded-full"
          />
          <label className="text-gray-700 text-lg">{task.name}</label>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
