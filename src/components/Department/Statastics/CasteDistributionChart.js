import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

// Data for the chart
const data = {
  labels: [
    'महार', 'मांग', 'चांभार', 'मेहतर', 'ढोर', 'होलार', 'खाटीक', 'मादगी', 'बसोर', 'मेघवाल'
  ],
  datasets: [
    {
      label: 'लोकसंख्या',
      data: [
        8006060, 2488531, 1411072, 217166, 116287, 108908, 108491, 56481, 55564, 40416
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: '%',
      data: [
        60.30, 18.70, 10.60, 1.60, 0.90, 0.80, 0.80, 0.40, 0.40, 0.30
      ],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.4)',
      borderWidth: 2,
      type: 'line',
      yAxisID: 'y1',
    },
  ],
};

// Configuration for the chart
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'महाराष्ट्रातील अनुसूचित जातीमधील 10 प्रमुख जाती (जनगणना 2011 नुसार)',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333',
      },
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw.toLocaleString();
            return `${datasetLabel}: ${value}`;
          },
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'जात',
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'लोकसंख्या',
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#333',
          callback: (value) => `${value}%`,
        },
        title: {
          display: true,
          text: '%',
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
    },
  },
};

const CasteDistributionChart = () => (
  <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Chart type={config.type} data={data} options={config.options} />
  </div>
);

export default CasteDistributionChart;
