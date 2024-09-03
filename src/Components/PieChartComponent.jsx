import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const PieChartComponent = ({ data, colors }) => (
  <div>
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    <div className="text-center mt-4">
      <h3 className="text-xl font-bold">Metros: 1.5M</h3>
      <h3 className="text-xl font-bold">Buckets: 1,500</h3>
    </div>
  </div>
);

export default PieChartComponent;
