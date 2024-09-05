import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const GaugeChart = ({ completed, remaining }) => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ['#36A2EB', '#FF6384'],
        circumference: 180,
        rotation: 270,
        cutout: '90%',
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Doughnut data={data} />
    </div>
  );
};

export default GaugeChart;
