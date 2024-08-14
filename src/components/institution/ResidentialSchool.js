import React from 'react';

// Define the schools array with data
const schools = [
  { srNo: 1, district: 'amaravati', schoolCode: '210066', uDiesCode: '27070111402', address: 'buradghat, tal.achalpur', yearOfStart: '2011-12', category: 'girls', class6: 31, class7: 39, class8: 33, class9: 32, class10: 25, totalStudents: 160, buildingType: 'govt.', yearOfBuildingCompletion: '30.04.2011', landArea: '4 hector', constructionCompleted: 'yes' },
  { srNo: 2, district: 'amaravati', schoolCode: '211046', uDiesCode: '27070303604', address: 'khanampur, anjangaon surji', yearOfStart: '2011-12', category: 'girls', class6: 18, class7: 30, class8: 34, class9: 30, class10: 21, totalStudents: 133, buildingType: 'govt.', yearOfBuildingCompletion: '31.12.2010', landArea: '2.21 hector', constructionCompleted: 'yes' },
  { srNo: 3, district: 'amaravati', schoolCode: '0204031', uDiesCode: '27070703202', address: 'tuljapur,chandur railway', yearOfStart: '2011-12', category: 'girls', class6: 17, class7: 24, class8: 33, class9: 18, class10: 19, totalStudents: 111, buildingType: 'govt.', yearOfBuildingCompletion: '31.07.2011', landArea: '2 hector', constructionCompleted: 'yes' },
  // Add more schools as needed
];

const ResidentialSchool = () => (
  <div>
    <table style={{width:'8%'}}>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>District</th>
          <th>School Code</th>
          <th>UDISE Code</th>
          <th>Address</th>
          <th>Year of Start</th>
          <th>Category</th>
          <th>Class 6</th>
          <th>Class 7</th>
          <th>Class 8</th>
          <th>Class 9</th>
          <th>Class 10</th>
          <th>Total Students</th>
          <th>Building Type</th>
          <th>Year of Building Completion</th>
          <th>Land Area</th>
          <th>Construction Completed</th>
        </tr>
      </thead>
      <tbody>
        {schools.map(school => (
          <tr key={school.srNo}>
            <td>{school.srNo}</td>
            <td>{school.district}</td>
            <td>{school.schoolCode}</td>
            <td>{school.uDiesCode}</td>
            <td>{school.address}</td>
            <td>{school.yearOfStart}</td>
            <td>{school.category}</td>
            <td>{school.class6}</td>
            <td>{school.class7}</td>
            <td>{school.class8}</td>
            <td>{school.class9}</td>
            <td>{school.class10}</td>
            <td>{school.totalStudents}</td>
            <td>{school.buildingType}</td>
            <td>{school.yearOfBuildingCompletion}</td>
            <td>{school.landArea}</td>
            <td>{school.constructionCompleted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ResidentialSchool;
