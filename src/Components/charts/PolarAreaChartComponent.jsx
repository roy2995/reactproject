import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChartComponent = ({ data, colors }) => {
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
      <PolarArea data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default PolarAreaChartComponent;
