// src/Components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ progress, completedTasks, totalTasks }) => {
  return (
    <div>
      <label className="block text-lg font-semibold text-gray-700 mb-2">Progreso</label>
      <progress value={progress} max="100" className="w-full h-5 text-blue-500"></progress>
      <p className="text-gray-600 text-sm mt-2">{completedTasks} de {totalTasks} tareas completadas</p>
    </div>
  );
};

export default ProgressBar;
