import React, { useState } from 'react';
import Select from 'react-select';

const beneficiaries = [
  // Populate this array with the provided data
  { district: 'Akola', taluka: 'Wadad', name: 'Shri Sant Rohidas Shetkari Swayamsahayata Bachat Gat', amount: 'Rs. 315000/-', date: '19.12.2013', purpose: 'Minit Tractor Subcidi', address: 'District, Akola, Akola, At Post Wadad' },
  { district: 'Akola', taluka: 'Akola', name: 'Aashray Mahila Bachat Gat', amount: 'Rs. 315000/-', date: '19.12.2013', purpose: 'Minit Tractor Subcidi', address: 'District, Akola, Akola, At Post Akola' },
  // Add the rest of the beneficiaries here
];

const districts = [
  { value: 'Akola', label: 'Akola' },
  { value: 'Akot', label: 'Akot' },
  { value: 'Balapur', label: 'Balapur' },
  { value: 'Patur', label: 'Patur' },
  { value: 'Murtizapur', label: 'Murtizapur' },
  { value: 'Telhara', label: 'Telhara' },
  { value: 'Barshitakli', label: 'Barshitakli' },
];

const talukas = [
  { value: 'Wadad', label: 'Wadad' },
  { value: 'Akola', label: 'Akola' },
  { value: 'Shioni', label: 'Shioni' },
  { value: 'Kapshi', label: 'Kapshi' },
  { value: 'Borgaon Manju', label: 'Borgaon Manju' },
  { value: 'Deoolgaon', label: 'Deoolgaon' },
  { value: 'Sonala', label: 'Sonala' },
  // Add the rest of the talukas here
];

const Beneficiary = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTaluka, setSelectedTaluka] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBeneficiaries = beneficiaries.filter(b => {
    return (
      (!selectedDistrict || b.district === selectedDistrict.value) &&
      (!selectedTaluka || b.taluka === selectedTaluka.value) &&
      (b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div>
      <h1>Beneficiary List</h1>
      <div>
        <Select
          options={districts}
          placeholder="Select District"
          onChange={setSelectedDistrict}
          isClearable
        />
        <Select
          options={talukas}
          placeholder="Select Taluka"
          onChange={setSelectedTaluka}
          isClearable
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredBeneficiaries.map((b, index) => (
          <li key={index}>
            <strong>{b.name}</strong><br />
            {b.amount} - {b.date}<br />
            {b.purpose}<br />
            {b.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beneficiary;

