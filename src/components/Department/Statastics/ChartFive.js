import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const ChartFive = () => {
  const data = {
    labels: ['1981', '1991', '2001', '2011'],
    datasets: [
      {
        label: 'भारत - पुरुष',
        data: [46.89, 64.14, 75.26, 80.88],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'भारत - स्त्री',
        data: [24.82, 39.29, 53.67, 64.63],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
      {
        label: 'अनुसूचित जाती - पुरुष',
        data: [31.12, 49.91, 66.64, 75.17],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
      },
      {
        label: 'अनुसूचित जाती - स्त्री',
        data: [10.93, 23.76, 41.90, 56.46],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'महाराष्ट्र - पुरुष',
        data: [58.79, 76.66, 85.96, 88.38],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'महाराष्ट्र - स्त्री',
        data: [34.79, 52.35, 67.03, 75.87],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
      {
        label: 'अनुसूचित जाती - महाराष्ट्र - पुरुष',
        data: [48.85, 70.45, 83.29, 87.18],
        borderColor: 'rgba(255, 99, 71, 1)',
        backgroundColor: 'rgba(255, 99, 71, 0.2)',
        fill: true,
      },
      {
        label: 'अनुसूचित जाती - महाराष्ट्र - स्त्री',
        data: [21.53, 41.59, 59.98, 71.89],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'साक्षरता प्रमाण % - Line Chart',
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
            return `${datasetLabel}: ${value}%`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'वर्ष',
        },
      },
      y: {
        title: {
          display: true,
          text: 'साक्षरता प्रमाण (%)',
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartFive;
