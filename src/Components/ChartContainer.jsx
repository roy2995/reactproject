import React from 'react';

const ChartContainer = ({ title, children }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default ChartContainer;
