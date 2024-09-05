import { Doughnut } from 'react-chartjs-2';

const DoughnutChartComponent = ({ data, colors }) => {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: 'Doughnut Data',
        data: data.map((d) => d.value),
        backgroundColor: colors,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',  // Coloca la leyenda en la parte superior
        align: 'center',   // Alinea la leyenda horizontalmente
        labels: {
          boxWidth: 5,  // Ajusta el tamaño de la caja de color en la leyenda
          padding: 4,   // Añade espacio entre las etiquetas
          color: 'black', // Color de la leyenda
        },
      },
    },
  };

  return (
    <div className="bg-white p-1 rounded-lg shadow-lg flex justify-center items-center" style={{ height: '219px', width: '420px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChartComponent;
