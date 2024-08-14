import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for the chart and table
const data = [
  { id: 1, name: "अगेर", quantity: 1 },
  { id: 2, name: "अनमुक", quantity: 2 },
  { id: 3, name: "आरेमाला", quantity: 3 },
  { id: 4, name: "आरवा माला", quantity: 4 },
  { id: 5, name: "बहना, बहाना", quantity: 5 },
  { id: 6, name: "बाकड, बंट", quantity: 6 },
  { id: 7, name: "बलाही, बलाई", quantity: 7 },
  { id: 8, name: "बसोर, बुरुड, बांसोर, बांसोडी, बसोड", quantity: 8 },
  { id: 9, name: "बेडाजंगम, बुडगा जंगम", quantity: 9 },
  { id: 10, name: "बेडर", quantity: 10 },
  { id: 11, name: "भांबी, भांभी, असादरु, असोदी, चामडिया, चमार, चमारी, चांभार, चमगार, हरळय्या, हराळी, खालपा, माचीगार, मोचीगार, मादर, मादिग, मोची, तेलगू मोची, कामाटी मोची, राणीगार, रोहिदास, नोना, रामनामी, रोहित, समगार, सतनामी, सुरज्यबंशी, सूरज्यरामनामी, समगारा, चर्मकार, परदेशी चामार", quantity: 11 },
  { id: 12, name: "भंगी, मेहतर, ओलगाना, रुखी, मलकाना, हलालखोर, लालबेगी, बाल्मिकी, करोर, झाडगल्ली, कोरार, झाडमल्ली, हेला", quantity: 12 },
  { id: 13, name: "बिंदला", quantity: 13 },
  { id: 14, name: "ब्यागरा", quantity: 14 },
  { id: 15, name: "चलवादी, चन्नया", quantity: 15 },
  { id: 16, name: "चेन्नदासर, होलया दासर, होलेया दासरी", quantity: 16 },
  { id: 17, name: "डक्कल, डोक्कलवार", quantity: 17 },
  { id: 18, name: "ढोर, कक्कय्या, कंकय्या, डोहोर", quantity: 18 },
  { id: 19, name: "डोम, डुमार", quantity: 19 },
  { id: 20, name: "येल्लमलवार, येल्लमलबंडलु", quantity: 20 },
  { id: 21, name: "गंडा, गंडी", quantity: 21 },
  { id: 22, name: "गरोडा, गारो", quantity: 22 },
  { id: 23, name: "घासी, घासीया", quantity: 23 },
  { id: 24, name: "हलीर", quantity: 24 },
  { id: 25, name: "हलसार, हसलार, हुलसवार, हलसवार", quantity: 25 },
  { id: 26, name: "होलार, व्हलार", quantity: 26 },
  { id: 27, name: "होलय, होलेर, होलेया, होलिया", quantity: 27 },
  { id: 28, name: "कैकाडी (अकोला, अमरावती, भंडारा, बुलढाणा, नागपूर, वर्धा, यवतमाळ, चंद्रपूर जिल्हा - राजूरा सोडून", quantity: 28 },
  { id: 29, name: "कटिया, पथरिया", quantity: 29 },
  { id: 30, name: "खंगार, कनेरा, मिरथा", quantity: 30 },
  { id: 31, name: "खाटिक, चिकवा, चिकवी", quantity: 31 },
  { id: 32, name: "कोलूपूल-वंडलु", quantity: 32 },
  { id: 33, name: "कोरी", quantity: 33 },
  { id: 34, name: "लिंगडेर", quantity: 34 },
  { id: 35, name: "मादगी", quantity: 35 },
  { id: 36, name: "मादिगा", quantity: 36 },
  { id: 37, name: "महार, मेहरा, तराळ, धेगू-मेगू", quantity: 37 },
  { id: 38, name: "माहयवंशी, धेड, वणकर, मारु-वणकर", quantity: 38 },
  { id: 39, name: "माला", quantity: 39 },
  { id: 40, name: "माला दासरी", quantity: 40 },
  { id: 41, name: "माला हन्नाई", quantity: 41 },
  { id: 42, name: "माला जंगम", quantity: 42 },
  { id: 43, name: "माला मस्ती", quantity: 43 },
  { id: 44, name: "माला साले, नेटकानी", quantity: 44 },
  { id: 45, name: "माला सन्यासी", quantity: 45 },
  { id: 46, name: "मांग, मातंग, मिनिमादिग, दखनी-मांग, मांग-म्हशी, मदारी, गारुडी, राधेमांग", quantity: 46 },
  { id: 47, name: "मांग गारोडी, मांग - गारुडी", quantity: 47 },
  { id: 48, name: "मन्ने", quantity: 48 },
  { id: 49, name: "मस्ती", quantity: 49 },
  { id: 50, name: "मेंघवाल, मंघवार", quantity: 50 },
  { id: 51, name: "मिठा, अयलवार", quantity: 51 },
  { id: 52, name: "मुक्री", quantity: 52 },
  { id: 53, name: "नाडिया, हादी", quantity: 53 },
  { id: 54, name: "पासी", quantity: 54 },
  { id: 55, name: "सांसी", quantity: 55 },
  { id: 56, name: "शेणवा, चेणवा, सेडमा, रावत", quantity: 56 },
  { id: 57, name: "सिंधोल्लू, चिंदोल्लू", quantity: 57 },
  { id: 58, name: "तिरगार, तिरबंदा", quantity: 58 },
  { id: 59, name: "तुरी", quantity: 59 }
];

const dataForChart = {
  labels: data.map(item => item.name),
  datasets: [
    {
      label: 'Quantity',
      data: data.map(item => item.quantity),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const optionsForChart = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.label + ': ' + tooltipItem.raw;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'जात, तत्सम जात, पोटजातींचे नाव',
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Quantity',
      },
    },
  },
};

const CasteData = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2>Data Chart</h2>
    <Bar data={dataForChart} options={optionsForChart} style={{ width: '90%', height: '400px' }} />

    <h2>Data Table</h2>
    <table border="1" style={{ marginTop: '20px', width: '90%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>क्रमांक</th>
          <th>जात, तत्सम जात, पोटजातींचे नाव</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CasteData;
