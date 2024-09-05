import React from 'react';
import Header from '../Components/Header';
import AreaChartComponent from '../Components/charts/AreaChartComponent';
import BarChartComponent from '../Components/charts/BarChartComponent';
import LineChartComponent from '../Components/charts/LineChartComponent';
import DoughnutChartComponent from '../Components/charts/DoughnutChartComponent';
import RadarChartComponent from '../Components/charts/RadarChartComponent';

function Dashboard() {
  const randomData = () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000));
  
  const chartData = [
    { name: 'Jan', value: randomData()[0] },
    { name: 'Feb', value: randomData()[1] },
    { name: 'Mar', value: randomData()[2] },
    { name: 'Apr', value: randomData()[3] },
    { name: 'May', value: randomData()[4] }
  ];

  const colors = ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)'];
  const barColors = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AreaChartComponent data={chartData} colors={colors} />
        <BarChartComponent data={chartData} colors={barColors} />
        <LineChartComponent data={chartData} colors={colors} />
        <DoughnutChartComponent data={chartData} colors={barColors} />
        <RadarChartComponent data={chartData} colors={colors} />
      </div>
    </div>
  );
}

export default Dashboard;
