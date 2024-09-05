import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Bar Data',
        data: data.map(item => item.value),
        backgroundColor: colors,
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChartComponent;
