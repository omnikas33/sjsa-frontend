import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: [
    'पुणे', 'नागपूर', 'ठाणे', 'सोलापूर', 'नांदेड', 'मुंबई उपनगर', 'अहमदनगर', 'नाशिक', 'औरंगाबाद',
    'अमरावती', 'कोल्हापूर', 'लातूर', 'बुलढाणा', 'जळगाव', 'अकोला', 'सांगली', 'बीड', 'चंद्रपूर',
    'यवतमाळ', 'सातारा', 'जालना', 'उस्मानाबाद', 'परभणी', 'वाशिम', 'मुंबई शहर', 'भंडारा', 'वर्धा',
    'हिंगोली', 'गोंदिया', 'रायगड', 'धुळे', 'गडचिरोली', 'रत्नागिरी', 'सिंधुदुर्ग', 'नंदुरबार'
  ],
  datasets: [
    {
      label: 'सर्वसाधारण (पुरुष)',
      data: [
        4924105, 2384975, 5865078, 2227852, 1730075, 5031323, 2342825, 3157186, 1924469, 1480768,
        1980658, 1273140, 1337560, 2197365, 932334, 1435728, 1349106, 1123834, 1419965, 1510842,
        1011473, 861535, 942870, 620302, 1684608, 605520, 668385, 606294, 661554, 1344345, 1054031,
        541328, 761121, 417332, 833170
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      stack: '0',
    },
    {
      label: 'सर्वसाधारण (स्त्री)',
      data: [
        4505303, 2268595, 5195070, 2089904, 1631217, 4325639, 2200334, 2950001, 1776813, 1407677,
        1895343, 1181056, 1248698, 2032552, 881572, 1386415, 1235943, 1080473, 1352383, 1492899,
        947573, 796041, 893216, 576858, 1400803, 594814, 632389, 571051, 660953, 1289855, 996831,
        531614, 853948, 432319, 815125
      ],
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      stack: '0',
    },
    {
      label: 'सर्वसाधारण (एकूण)',
      data: [
        9429408, 4653570, 11060148, 4317756, 3361292, 9356962, 4543159, 6107187, 3701282, 2888445,
        3876001, 2454196, 2586258, 4229917, 1813906, 2822143, 2585049, 2204307, 2772348, 3003741,
        1959046, 1657576, 1836086, 1197160, 3085411, 1200334, 1300774, 1177345, 1322507, 2634200,
        2050862, 1072942, 1615069, 849651, 1648295
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      stack: '1',
    },
    {
      label: 'अनुसूचित जाती (पुरुष)',
      data: [
        602755, 439205, 377885, 331960, 328797, 300291, 291521, 282213, 277228, 259398, 253390,
        247918, 241445, 199427, 186244, 177108, 179777, 176898, 167009, 161703, 138957, 136354,
        125883, 117867, 111564, 100421, 96569, 93379, 87434, 67980, 65068, 61041, 31967, 26830,
        24273
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      stack: '2',
    },
    {
      label: 'अनुसूचित जाती (स्त्री)',
      data: [
        577948, 428508, 352204, 317785, 311686, 283011, 282177, 272474, 262140, 246976, 251071,
        232995, 229450, 189846, 177815, 175985, 171477, 171467, 161509, 161533, 133309, 128830,
        121425, 111595, 108370, 99951, 92261, 89186, 88527, 66972, 62503, 59704, 34981, 28756,
        23712
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      stack: '2',
    },
    {
      label: 'अनुसूचित जाती (एकूण)',
      data: [
        1180703, 867713, 730089, 649745, 640483, 583302, 573698, 554687, 539368, 506374, 504461,
        480913, 470895, 389273, 364059, 353093, 351254, 348365, 328518, 323236, 272266, 265184,
        247308, 229462, 219934, 200372, 188830, 182565, 175961, 134952, 127571, 120745, 66948,
        55586, 47985
      ],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      stack: '3',
    },
    {
      label: '% अनुसूचित जाती',
      data: [
        12.52, 18.65, 6.6, 15.05, 19.05, 6.23, 12.63, 9.08, 14.57, 17.53, 13.01, 19.6, 18.21,
        9.2, 20.07, 12.51, 13.59, 15.8, 11.85, 10.76, 13.9, 16, 19.17, 7.13, 16.69, 14.52,
        15.51, 13.31, 5.12, 6.22, 11.25, 4.15, 6.54, 2.91
      ],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.4)',
      borderWidth: 2,
      type: 'line',
      yAxisID: 'y1',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
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
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toLocaleString()}`;
        },
      },
    },
    title: {
      display: true,
      text: 'सर्वसाधारण व अनुसूचित जातीची लोकसंख्या - जनगणना 2011',
      font: {
        size: 18,
        weight: 'bold',
      },
      color: '#333',
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
        },
        color: '#333',
      },
      title: {
        display: true,
        text: 'जिल्हा',
        font: {
          size: 14,
        },
        color: '#333',
      },
    },
    y: {
      stacked: true,
      ticks: {
        font: {
          size: 12,
        },
        color: '#333',
        callback: (value) => value.toLocaleString(),
      },
      title: {
        display: true,
        text: 'संख्या',
        font: {
          size: 14,
        },
        color: '#333',
      },
    },
    y1: {
      type: 'linear',
      position: 'right',
      stacked: false,
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
        text: '% अनुसूचित जाती',
        font: {
          size: 14,
        },
        color: '#333',
      },
    },
  },
};

const CasteCensusChart = () => (
  <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Bar data={data} options={options} />
  </div>
);

export default CasteCensusChart;
