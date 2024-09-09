// src/Components/ContingencyList.jsx
import React from 'react';

const ContingencyList = ({ contingencies, handleContingencyChange }) => {
  return (
    <div>
      <label className="block text-lg font-semibold text-gray-700 mb-2">Lista de Contingencias</label>
      {contingencies.map((contingency, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={contingency.completed}
            onChange={() => handleContingencyChange(index)}
            className="mr-3 h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 rounded-full"
          />
          <label className="text-gray-700 text-lg">{contingency.name}</label>
        </div>
      ))}
    </div>
  );
};

export default ContingencyList;
