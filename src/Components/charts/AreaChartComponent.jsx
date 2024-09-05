import { Line } from 'react-chartjs-2';

const AreaChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Área Data (m²)',
        data: data.map(d => d.value),
        backgroundColor: colors[0],
        borderColor: colors[1],
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg" style={{ height: '219px', width: '420px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AreaChartComponent;
