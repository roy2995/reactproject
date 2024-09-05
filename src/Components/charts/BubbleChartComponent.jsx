import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChartComponent = ({ data }) => {
  const chartData = {
    datasets: data.map(item => ({
      label: item.label,
      data: [{ x: item.x, y: item.y, r: item.radius }],
      backgroundColor: item.color,
    })),
  };

  return (
    <div style={{ height: '300px' }}>
      <Bubble data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BubbleChartComponent;
