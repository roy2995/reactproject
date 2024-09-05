import React from 'react';
import { Line } from 'react-chartjs-2';

const AreaChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Area Data',
        data: data.map(item => item.value),
        fill: true,
        backgroundColor: colors[0],
        borderColor: colors[1],
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default AreaChartComponent;
