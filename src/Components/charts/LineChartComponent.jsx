import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Line Data',
        data: data.map(item => item.value),
        borderColor: colors[0],
        backgroundColor: colors[1],
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default LineChartComponent;
