// src/App.js

import React from 'react';
import Styles from './CSS/Osmanabad_AshramSchool.css'
const ashramSchools = [
  {
    name: 'संत गाडगेबाबा माध्यमिक अनु.जाती आश्रमशाळा, तुळजापुर. जि. उस्मानाबाद.',
    udise: '27290711140',
    sscCode: '59.07.078',
    principalContact: 'koretukaram@gmail.com, Mo. 9860910449',
    aadharCount: 85,
    approvedStudents: 120,
    admittedStudents: 105,
    classes: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: 26,
      10: 41,
      total: 105
    }
  },
  {
    name: 'संत गाडगेबाबा प्राथमिक अनु.जाती आश्रमशाळा, तुळजापुर. जि. उस्मानाबाद.',
    udise: '27290711129',
    sscCode: '',
    principalContact: 'ashiksawant.1973@gmail.com, अशोक सावंत : 9960163892',
    aadharCount: 89,
    approvedStudents: 140,
    admittedStudents: 117,
    classes: {
      1: 5,
      2: 19,
      3: 18,
      4: 20,
      5: 21,
      6: 17,
      7: 17,
      8: '',
      9: '',
      10: '',
      total: 117
    }
  },
  // Add more ashram schools here
];

const Osmanabad_AshramSchool = () => {
  return (
    <div className="App">
      <h1>Ashram Schools Information</h1>
      <table className="ashram-table">
        <thead>
          <tr>
            <th>आश्रमशाळेचे नाव</th>
            <th>युडायस क्र.</th>
            <th>एसएससी कोड क्र.</th>
            <th>मुख्याध्यापकांचा दुरध्वनी क्र. व इ-मेल आयडी</th>
            <th>आधारकार्ड काढण्यात आलेल्या विद्यार्थ्याची संख्या</th>
            <th>विद्यार्थी मान्य संख्या</th>
            <th>प्रवेशित विद्या संख्या</th>
            <th>1 ली</th>
            <th>2 री</th>
            <th>3 री</th>
            <th>4 थी</th>
            <th>5 वी</th>
            <th>6 वी</th>
            <th>7 वी</th>
            <th>8 वी</th>
            <th>9 वी</th>
            <th>10 वी</th>
            <th>एकुण</th>
          </tr>
        </thead>
        <tbody>
          {ashramSchools.map((school, index) => (
            <tr key={index}>
              <td>{school.name}</td>
              <td>{school.udise}</td>
              <td>{school.sscCode}</td>
              <td>{school.principalContact}</td>
              <td>{school.aadharCount}</td>
              <td>{school.approvedStudents}</td>
              <td>{school.admittedStudents}</td>
              <td>{school.classes[1]}</td>
              <td>{school.classes[2]}</td>
              <td>{school.classes[3]}</td>
              <td>{school.classes[4]}</td>
              <td>{school.classes[5]}</td>
              <td>{school.classes[6]}</td>
              <td>{school.classes[7]}</td>
              <td>{school.classes[8]}</td>
              <td>{school.classes[9]}</td>
              <td>{school.classes[10]}</td>
              <td>{school.classes.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Osmanabad_AshramSchool;
