import React from 'react';
import Header from '../Components/Header';
import AreaChartComponent from '../Components/charts/AreaChartComponent';
import BarChartComponent from '../Components/charts/BarChartComponent';
import LineChartComponent from '../Components/charts/LineChartComponent';
import DoughnutChartComponent from '../Components/charts/DoughnutChartComponent';
import GaugeChartComponent from '../Components/charts/GaugeChartComponent';
import ListComponent from '../Components/ListComponent' 


const Dashboard = () => {
  const areaData = [
    { name: "Terminal 1", value: 3 },
    { name: "Estacionamientos", value: 4127 },
    { name: "Terminal 2", value: 20287 },
    { name: "Terminal de Carga", value: 3 },
    { name: "Tenso Estructuras", value: 20287 },
  ];

  const taskData = [
    { name: "Terminal 1", value: 5 },
    { name: "Estacionamientos", value: 3 },
    { name: "Terminal 2", value: 5 },
    { name: "Terminal de Carga", value: 4 },
    { name: "Tenso Estructuras", value: 2 },
  ];

  const frequencyData = [
    { name: "Diario", value: 40 },
    { name: "Semanal", value: 30 },
    { name: "Quincenal", value: 15 },
    { name: "Mensual", value: 15 },
  ];

  const colors = ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)'];
  const barColors = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AreaChartComponent data={areaData} colors={colors} />
        <BarChartComponent data={taskData} colors={barColors} />
        <LineChartComponent data={frequencyData} colors={colors} />
        <DoughnutChartComponent data={frequencyData} colors={barColors} />
        <GaugeChartComponent value={85} title="Nivel de cumplimiento en Terminal 1" />
        <GaugeChartComponent value={90} title="Nivel de cumplimiento en Terminal 2" />
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ListComponent title="Recent Daily Reports" items={['2023-05-01', '2023-04-30', '2023-04-29']} />
        <ListComponent title="Recent Weekly Reports" items={['Week of 2023-04-24', 'Week of 2023-04-17', 'Week of 2023-04-10']} />
        <ListComponent title="Recent Monthly Reports" items={['April 2023', 'March 2023']} />
      </div>
    </div>
  );
};

export default Dashboard;