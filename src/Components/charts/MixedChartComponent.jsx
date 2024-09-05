import React from 'react';
import { Chart } from 'react-chartjs-2';

const MixedChartComponent = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: data.barData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        type: 'line',
        label: 'Line Dataset',
        data: data.lineData,
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Chart type='bar' data={chartData} />
    </div>
  );
};

export default MixedChartComponent;
