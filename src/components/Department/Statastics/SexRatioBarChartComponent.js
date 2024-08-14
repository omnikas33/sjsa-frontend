import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const SexRatioBarChartComponent = () => {
  const data = {
    labels: ['1961', '1971', '1981', '1991', '2001', '2011'],
    datasets: [
      {
        label: 'भारत',
        data: [941, 930, 934, 927, 933, 940],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      },
      {
        label: 'महाराष्ट्र',
        data: [936, 930, 937, 934, 922, 925],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.1,
      },
      {
        label: 'अनुसूचित जाती',
        data: [962, 947, 948, 944, 952, 961],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'लिंग गुणोत्तर (Sex Ratio) - Line Chart',
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
            const value = tooltipItem.raw;
            return `${datasetLabel}: ${value}`;
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
          text: 'लिंग गुणोत्तर',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SexRatioBarChartComponent;
