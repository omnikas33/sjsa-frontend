import React from 'react';
  

const AshramshalaTable = ({ data }) => {
  return (
    <div col-lg-9 >
      <table border="1" style={{width:'80%'}}>
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
          {data.map((school, index) => (
            <tr key={index}>
              <td>{school.name}</td>
              <td>{school.udais}</td>
              <td>{school.sscCode}</td>
              <td>{school.contact}</td>
              <td>{school.aadharCount}</td>
              <td>{school.approvedCount}</td>
              <td>{school.enrolledCount}</td>
              <td>{school.firstGrade}</td>
              <td>{school.secondGrade}</td>
              <td>{school.thirdGrade}</td>
              <td>{school.fourthGrade}</td>
              <td>{school.fifthGrade}</td>
              <td>{school.sixthGrade}</td>
              <td>{school.seventhGrade}</td>
              <td>{school.eighthGrade}</td>
              <td>{school.ninthGrade}</td>
              <td>{school.tenthGrade}</td>
              <td>{school.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AshramshalaTable;
