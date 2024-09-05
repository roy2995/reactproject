import { Bar } from 'react-chartjs-2';

const BarChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Tareas por Área',
        data: data.map(d => d.value),
        backgroundColor: colors,
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChartComponent;
