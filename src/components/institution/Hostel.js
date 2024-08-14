import React from 'react';

const Hostel = ({  data}) => {
  return (
    <div>
      <table style={{width:'8%'}}>
        <thead>
          <tr>
            <th>District</th>
            <th>Code</th>
            <th>Name & Address of Hostel</th>
            <th>Boys/Girls</th>
            <th>Sanctioned Strength</th>
            <th>No. of Applications received in 15-16</th>
            <th>Admissions in 2015-16</th>
            <th>Total admitted students in 2015-16</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hostel, index) => (
            <tr key={index}>
              <td>{hostel.district}</td>
              <td>{hostel.code}</td>
              <td>{hostel.name}</td>
              <td>{hostel.boysOrGirls}</td>
              <td>{hostel.sanctionedStrength}</td>
              <td>{hostel.applicationsReceived || '-'}</td>
              <td>{hostel.admissionsIn1516}</td>
              <td>{hostel.totalAdmitted1516}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hostel;
