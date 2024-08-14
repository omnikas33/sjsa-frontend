import React from 'react';
import Styles from './CSS/Table.css'
const SC_AshramSchool = () => {
  return (
    <div>
      <h3>SC Ashram School Table</h3>
      {/* Add the table for SC Ashram School */}
      <table>
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
          <tr>
            <td>संत गाडगेबाबा माध्यमिक अनु.जाती आश्रमशाळा, तुळजापुर. जि. उस्मानाबाद.</td>
            <td>27290711140</td>
            <td>59.07.078</td>
            <td>koretukaram@gmail.com, Mo. 9860910449</td>
            <td>85</td>
            <td>120</td>
            <td>105</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>26</td>
            <td>41</td>
            <td>105</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default SC_AshramSchool;