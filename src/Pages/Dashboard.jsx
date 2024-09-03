// src/pages/Dashboard.jsx
import React from 'react';
import Header from '../Components/Header';
import ChartContainer from '../Components/ChartContainer';
import BarChartComponent from '../Components/BarChartComponent';
import LineChartComponent from '../Components/LineChartComponent';
import PieChartComponent from '../Components/PieChartComponent';
import ListComponent from '../Components/ListComponent';
function Dashboard() {
  const barChartData = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 1398 },
    { name: 'Wed', value: 9800 },
    { name: 'Thu', value: 3908 },
    { name: 'Fri', value: 4800 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 4300 },
  ];

  const lineChartData = [
    { name: 'Week 1', value: 4000 },
    { name: 'Week 2', value: 3000 },
    { name: 'Week 3', value: 2000 },
    { name: 'Week 4', value: 2780 },
  ];

  const pieChartData = [
    { name: 'Metros Cuadrados', value: 2400 },
    { name: 'Buckets', value: 4567 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  const recentWeeklyReports = [
    'Week 1 - Cleaned: 4000 sq ft',
    'Week 2 - Cleaned: 3000 sq ft',
    'Week 3 - Cleaned: 2000 sq ft',
  ];

  const recentMonthlyReports = [
    'Month 1 - Cleaned: 10,000 sq ft',
    'Month 2 - Cleaned: 12,000 sq ft',
  ];

  // Supongamos que el rol del usuario es 'admin', esto debería venir del estado global o de la autenticación
  const userRole = 'admin'; 

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <Header role={userRole} />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ChartContainer title="Bar Chart Example">
            <BarChartComponent data={barChartData} />
          </ChartContainer>
          <ChartContainer title="Line Chart Example">
            <LineChartComponent data={lineChartData} />
          </ChartContainer>
          <ChartContainer title="Pie Chart Example">
            <PieChartComponent data={pieChartData} colors={COLORS} />
          </ChartContainer>
        </div>

        <ListComponent title="Recent Weekly Reports" items={recentWeeklyReports} />
        <ListComponent title="Recent Monthly Reports" items={recentMonthlyReports} />
      </div>
    </div>
  );
}

export default Dashboard;