import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const LineChartComponent = ({ data }) => (
  <LineChart
    width={500}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" stroke="#cbd5e0" />
    <YAxis stroke="#cbd5e0" />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#48bb78" />
  </LineChart>
);

export default LineChartComponent;
