import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import schemes from '../corpData.js'; 
import icon1 from '../Images/Icons/i.png'
import PageHeading from './Global/PageHeading.js';

const Corporations = () => {
  const [selectedScheme, setSelectedScheme] = useState(schemes[0]);

  const handleTabClick = (scheme) => {
    setSelectedScheme(scheme);
  };

  return (
    <div>
            <PageHeading heading='Corporations'/>

      <div className="tab-container mt-2">

        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className={`tab ${selectedScheme.id === scheme.id ? 'active' : ''}`}
            onClick={() => handleTabClick(scheme)}
          >
            <FontAwesomeIcon icon={scheme.icon} size="2x" />
            <h6 className="mb-0">{scheme.name}</h6>
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          {selectedScheme.subSchemes && (
            <div className="mt-2" style={{overflowY:'auto', height:'500px'}}>
              {selectedScheme.subSchemes.map((subScheme) => (
                <Link
                  key={subScheme.id}
                  to={`/subscheme/${selectedScheme.id}/${subScheme.id}`}
                  className="tab"
                >
                  <div className='corp-div'>
                  <img src={icon1} className='icon' alt='Info' />
                  <h6 className="mb-0">{subScheme.name} </h6>
                  </div>
                  <p className='summary'>{subScheme.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Corporations;
