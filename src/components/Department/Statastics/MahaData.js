// src/components/MahaData.js
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the components of Chart.js you need
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

const MahaData = () => {
  // Data for different charts
  const populationData = {
    labels: ['Total Population', 'SC Population'],
    datasets: [
      {
        label: 'Population',
        data: [112374333, 13275898],
        backgroundColor: ['#4e73df', '#1cc88a'],
        borderColor: ['#2e59d9', '#17a673'],
        borderWidth: 1,
      },
    ],
  };

  const adminData = {
    labels: ['Total Districts', 'Revenue Divisions', 'Talukas', 'Settled Villages', 'Unsettled Villages', 'Municipalities', 'Municipal Corporations', 'Panchayat Samitis', 'Gram Panchayats', 'Nagar Panchayats', 'Katak Mandals', 'District Councils', 'Primary Schools', 'Secondary Schools'],
    datasets: [
      {
        label: 'Administrative Units',
        type: 'bar',
        data: [36, 6, 355, 40959, 2706, 28, 244, 351, 27832, 139, 7, 34, 105848, 28612],
        backgroundColor: [
          '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b',
          '#5a5c5f', '#f8d7da', '#d4edda', '#cce5ff', '#f8f9fc',
          '#e2e3e5', '#c6e0b4', '#d6a4a4', '#a4d6e0'
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
      {
        label: 'Cumulative Total',
        type: 'line',
        data: [36, 42, 397, 41356, 44062, 44090, 44334, 44685, 72467, 72606, 72613, 72647, 83295, 111907],
        borderColor: '#ff6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.1,
        fill: true,
      },
    ],
  };

  // Options for the Bar Chart with Line Overlay
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
    <div className="maha-data-container">
      <h2>Maharashtra Data Statistics</h2>
      <div className="charts">
        <div className="chart">
          <h3>Population Distribution</h3>
          <Pie data={populationData} options={pieOptions} />
        </div>
        <div className="chart">
          <h3>Administrative Units</h3>
          <Bar data={adminData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default MahaData;
