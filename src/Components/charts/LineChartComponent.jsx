import { Line } from 'react-chartjs-2';

const LineChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Limpieza por Frecuencia',
        data: data.map(d => d.value),
        borderColor: colors[1],
        backgroundColor: colors[0],
        pointBackgroundColor: colors[1],
        fill: false,
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

export default LineChartComponent;
