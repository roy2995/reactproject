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
  
  const mixedChartData = {
    labels: ['Enero', 'Febrero', 'Marzo'],
    barData: [20, 30, 40],
    lineData: [50, 60, 70],
  };
  

  const colors = ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)'];
  const barColors = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header role="admin"/>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AreaChartComponent data={areaData} colors={colors} />
        <BarChartComponent data={taskData} colors={barColors} />
        <LineChartComponent data={frequencyData} colors={colors} />
        <DoughnutChartComponent data={frequencyData} colors={barColors} />
        <GaugeChartComponent value={85} title="Nivel de cumplimiento en Terminal 1" />
        <GaugeChartComponent value={85} title="Nivel de cumplimiento en Terminal 2" />
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <ListComponent title="Reportes Diarios" items={['2024-09-06', '2023-09-02', '2023-09-01']} />
        <ListComponent title="Reportes Semanles" items={['semana 2023-08-24', 'semana 2023-08-17', 'semana 2023-08-10']} />
        <ListComponent title="Reportes Mensuales" items={['Abril 2024', 'agosto 2024']} />
      </div>
    </div>
  );
};

export default Dashboard;