import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeading from '../Global/PageHeading';

const KeyPersonsTab = () => {
  const [ministers, setMinisters] = useState([]);

  useEffect(() => {
    // Fetch ministers from the backend
    axios.get('http://localhost:5001/api/ministers')
      .then(response => {
        setMinisters(response.data);
      })
      .catch(error => {
        console.error('Error fetching ministers:', error);
      });
  }, []);

  return (
    <section className="minister-section" role="minister" aria-label="Minister Details" id="minister">
      <PageHeading heading='Key Persons'/>
      <div className="container">
        <div className="row">
          {ministers.length > 0 ? (
            ministers.map((minister, index) => (
              <div className="column" key={minister.id}>
                <div className="card-minister">
                  <img
                    className="card-image"
                    src={minister.imageUrl}
                    height="130"
                    width="130"
                    alt={minister.alt}
                    title={minister.name}
                  />
                  <h6 className="card-title-minister">{minister.name}</h6>
                  <p className="card-description">{minister.role}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No ministers available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default KeyPersonsTab;
