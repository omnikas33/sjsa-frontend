import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SchemeDetailsPage = () => {
  const { schemeId } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/schemes/${schemeId}`);
        setScheme(response.data);
      } catch (error) {
        console.error('Error fetching scheme details:', error);
        toast.error('Failed to fetch scheme details');
      }
    };

    fetchSchemeDetails();
  }, [schemeId]);

  if (!scheme) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{scheme.name}</h1>
      <p><strong>Description:</strong> {scheme.description}</p>
      <p><strong>Objective:</strong> {scheme.objective}</p>
      <p><strong>Funding:</strong> ₹ {scheme.funding}</p>
      <p><strong>Benefits:</strong> ₹ {scheme.benefits}</p>
      <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
      <p><strong>Beneficiary:</strong> {scheme.beneficiary}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SchemeDetailsPage;
