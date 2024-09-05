import React from 'react';

const ContentChart = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 ">
      {children}
    </div>
  );
};

export default ContentChart;





