
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BedStatisticsChart = ({ bedData }) => {
  const data = {
    labels: bedData.map(item => item.name),
    datasets: [
      {
        label: 'Available Beds',
        data: bedData.map(item => item.availableBeds),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-md mx-auto px-20 py-24 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4">Bed Availability Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BedStatisticsChart;