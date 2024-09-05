import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Radar Data',
        data: data.map(item => item.value),
        backgroundColor: colors[0],
        borderColor: colors[1],
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Radar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default RadarChartComponent;
