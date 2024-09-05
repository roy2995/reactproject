import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const GaugeChartComponent = ({ value, min = 0, max = 100, title = "Gauge Chart" }) => {
  const chartData = {
    datasets: [
      {
        data: [value, max - value], // El valor y el espacio restante
        backgroundColor: ['#36A2EB', '#E5E5E5'], // Color para la parte llena y vacía
        borderWidth: 0, // Sin bordes
        circumference: 180, // Media circunferencia (180 grados)
        rotation: -90, // Iniciar desde la parte inferior
        cutout: '80%', // Grosor del gráfico
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // No mostrar leyenda
      },
      title: {
        display: true, // Mostrar título
        text: title, // Título dinámico
        color: 'black', // Color del título
        font: {
          size: 16, // Tamaño del texto del título
        },
        padding: {
          top: 10, // Espacio superior entre el gráfico y el título
          bottom: 10, // Espacio inferior
        },
      },
    },
    rotation: -1 * Math.PI, // Rotar para que el gauge inicie en el ángulo correcto
    circumference: Math.PI, // Usar solo media circunferencia
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ height: '219px', width: '420px' }}>
      <Doughnut data={chartData} options={options} />
      <div className="absolute text-xl font-bold">{value}</div> {/* Mostrar valor en el centro */}
    </div>
  );
};

export default GaugeChartComponent;
