// src/components/IndiaPopulation.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Statastics.css';

// Register the components of Chart.js you need
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const IndiaPopulation = () => {
  // Data for States vs. UTs
  const statesVsUTsData = {
    labels: ['Total States', 'Total UTs'],
    datasets: [
      {
        label: 'States and UTs',
        data: [28, 9],
        backgroundColor: '#4e73df',
        borderColor: '#2e59d9',
        borderWidth: 1,
      },
    ],
  };

  // Data for Population
  const populationData = {
    labels: ['Total Population', 'SC/ST Population'],
    datasets: [
      {
        label: 'Population',
        data: [1210854977, 201378372],
        backgroundColor: ['#4e73df', '#1cc88a'],
        borderColor: ['#2e59d9', '#17a673'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar Chart
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: true,
        },
      },
      y: {
        beginAtZero: true,
        min: 0, // Ensure the scale starts at zero
        ticks: {
          callback: function(value) {
            if (value >= 1000000) {
              return value / 1000000 + 'M';
            } else if (value >= 1000) {
              return value / 1000 + 'K';
            } else {
              return value;
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  };

  // Options for the Pie Chart
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (context.parsed !== null) {
              label += ': ' + new Intl.NumberFormat().format(context.parsed);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>India Population Statistics</h2>
      <div className="charts">
        <div className="chart">
          <h3>States vs Union Territories</h3>
          <div className="chart-wrapper">
            <Bar data={statesVsUTsData} options={barOptions} />
          </div>
        </div>
        <div className="chart">
          <h3>Population Distribution</h3>
          <div className="chart-wrapper">
            <Pie data={populationData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaPopulation;
