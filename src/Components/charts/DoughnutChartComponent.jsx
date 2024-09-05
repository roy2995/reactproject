import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: colors,
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default DoughnutChartComponent;
