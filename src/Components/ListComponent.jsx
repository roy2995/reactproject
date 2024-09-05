import React from 'react';

const ListComponent = ({ title, items }) => (
  <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="list-disc list-inside flex flex-wrap">
      {items.map((item, index) => (
        <li key={index} className="m-2 p-2 border rounded-lg">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ListComponent;
