import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

function Dashboard() {
  const cleaningData = [
    { name: 'Mon', Cleaning: 2400 },
    { name: 'Tue', Cleaning: 1398 },
    { name: 'Wed', Cleaning: 9800 },
    { name: 'Thu', Cleaning: 3908 },
    { name: 'Fri', Cleaning: 4800 },
    { name: 'Sat', Cleaning: 3800 },
    { name: 'Sun', Cleaning: 4300 },
  ];

  const cleanedAreaData = [
    { name: 'Week 1', Cleaned: 4000 },
    { name: 'Week 2', Cleaned: 3000 },
    { name: 'Week 3', Cleaned: 2000 },
    { name: 'Week 4', Cleaned: 2780 },
  ];

  const pieData = [
    { name: 'Metros Cuadrados', value: 2400 },
    { name: 'Buckets', value: 4567 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Cleaning Tasks</h2>
          <BarChart
            width={500}
            height={300}
            data={cleaningData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#cbd5e0" />
            <YAxis stroke="#cbd5e0" />
            <Tooltip />
            <Bar dataKey="Cleaning" fill="#3182ce" />
          </BarChart>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Cleaned Area</h2>
          <LineChart
            width={500}
            height={300}
            data={cleanedAreaData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#cbd5e0" />
            <YAxis stroke="#cbd5e0" />
            <Tooltip />
            <Line type="monotone" dataKey="Cleaned" stroke="#48bb78" />
          </LineChart>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="text-center mt-4">
            <h3 className="text-xl font-bold">Metros: 1.5M</h3>
            <h3 className="text-xl font-bold">Buckets: 1,500</h3>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Weekly Reports</h3>
        <ul className="list-disc list-inside">
          <li>Week 1 - Cleaned: 4000 sq ft</li>
          <li>Week 2 - Cleaned: 3000 sq ft</li>
          <li>Week 3 - Cleaned: 2000 sq ft</li>
        </ul>
      </div>

      <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Monthly Reports</h3>
        <ul className="list-disc list-inside">
          <li>Month 1 - Cleaned: 10,000 sq ft</li>
          <li>Month 2 - Cleaned: 12,000 sq ft</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
