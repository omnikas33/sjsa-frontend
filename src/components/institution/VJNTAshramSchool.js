import React from 'react';

const VJNTAshramSchool = ({ data }) => {
  return (
    <div>
      <table style={{width:'8%'}}>
        <thead>
          <tr>
            <th>अ.क्र</th>
            <th>जिल्हा</th>
            <th>तालुका</th>
            <th>शाळेचे नाव व ठिकाण</th>
            <th>कार्यरत वर्ग</th>
            <th>पुरुष अधिक्षकाचे नाव</th>
          </tr>
        </thead>
        <tbody>
          {data.map((school, index) => (
            <tr key={index}>
              <td>{school['अ.क्र']}</td>
              <td>{school['जिल्हा']}</td>
              <td>{school['तालुका']}</td>
              <td>{school['शाळेचे नाव व ठिकाण']}</td>
              <td>{school['कार्यरत वर्ग']}</td>
              <td>{school['पुरुष अधिक्षकाचे नाव']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VJNTAshramSchool;
