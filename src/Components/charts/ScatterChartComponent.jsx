import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChartComponent = ({ data }) => {
  const chartData = {
    datasets: data.map(item => ({
      label: item.label,
      data: item.values,
      backgroundColor: item.color,
    })),
  };

  return (
    <div style={{ height: '300px' }}>
      <Scatter data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default ScatterChartComponent;
