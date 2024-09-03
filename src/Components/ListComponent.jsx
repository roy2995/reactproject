import React from 'react';

const ListComponent = ({ title, items }) => (
  <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ListComponent;
