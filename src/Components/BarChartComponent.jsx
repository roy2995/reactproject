import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const BarChartComponent = ({ data }) => (
  <BarChart
    width={500}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" stroke="#cbd5e0" />
    <YAxis stroke="#cbd5e0" />
    <Tooltip />
    <Bar dataKey="value" fill="#3182ce" />
  </BarChart>
);

export default BarChartComponent;
