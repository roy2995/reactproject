import { Radar } from 'react-chartjs-2';

const RadarChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: 'Radar Data',
        data: data.map((d) => d.value),
        borderColor: colors[1],
        backgroundColor: colors[0],
        pointBackgroundColor: colors[1],
        pointBorderColor: colors[1],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        ticks: {
          color: 'black',
        },
        grid: {
          color: 'gray',
        },
        angleLines: {
          color: 'gray',
        },
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
    <div className="bg-white p-4 rounded-lg shadow-lg flex justify-center items-center" style={{ height: '219px', width: '420px' }}>
      <Radar data={chartData} options={options} />
    </div>
  );
};

export default RadarChartComponent;
