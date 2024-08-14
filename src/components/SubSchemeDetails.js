import React from 'react';
import { useParams } from 'react-router-dom';
import { schemes } from '../Data';
const SubSchemeDetails = () => {
  const { schemeId, subSchemeId } = useParams(); // Destructure useParams correctly

  // Find the selected scheme and sub-scheme from data
  const selectedScheme = schemes.find((scheme) => scheme.id === parseInt(schemeId));
  const selectedSubScheme = selectedScheme?.subSchemes.find((subScheme) => subScheme.id === parseInt(subSchemeId));

  if (!selectedScheme || !selectedSubScheme) {
    return <div>Sub-scheme not found</div>;
  }

  return (
    <div className="sub-scheme-details">
      <div className='col-lg-2'>   
       <div className="sidebar">
        <a href="#summary">Summary</a>
        <a href="#funding">Funding</a>
        <a href="#objective">Objective</a>
        <a href="#beneficiary">Beneficiary</a>
        <a href="#eligibility">Eligibility</a>
        <a href="#benefits">Benefits</a>
        <a href="#application">Application Process</a>
        <a href="#category">Category</a>
        <a href="#contact">Contact</a>
        <a href="#applicationForm">Application Form</a>
        <a href="#applicationAcceptancePeriod">Application Acceptance Period</a>
      </div>
</div>
      <div className='col-lg-10 mx-2'>     
         <div className="sub-content">
        <div id="summary">
          <h3>Summary</h3>
          <p>{selectedSubScheme.details.summary}</p>
        </div>
        <div id="funding">
          <h3>Funding</h3>
          <p>{selectedSubScheme.details.funding}</p>
        </div>
        <div id="objective">
          <h3>Objective</h3>
          <p>{selectedSubScheme.details.objective}</p>
        </div>
        <div id="beneficiary">
          <h3>Beneficiary</h3>
          <p>{selectedSubScheme.details.beneficiary}</p>
        </div>
        <div id="eligibility">
          <h3>Eligibility</h3>
          <ul>
            {selectedSubScheme.details.eligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="benefits">
          <h3>Benefits</h3>
          <p>{selectedSubScheme.details.benefits}</p>
        </div>
        <div id="application">
          <h3>Application Process</h3>
          <p>{selectedSubScheme.details.application}</p>
        </div>
        <div id="category">
          <h3>Category</h3>
          <p>{selectedSubScheme.details.category}</p>
        </div>
        <div id="contact">
          <h3>Contact</h3>
          <p>{selectedSubScheme.details.contact}</p>
        </div>
        <div id="applicationForm">
          <h3>Application Form</h3>
          <a href={selectedSubScheme.details.applicationFormUrl} target="_blank" rel="noopener noreferrer">
            Download Application Form
          </a>
        </div>
        <div id="applicationAcceptancePeriod">
          <h3>Application Acceptance Period</h3>
          <p>{selectedSubScheme.details.applicationAcceptancePeriod}</p>
        </div>
      </div>
</div>


    </div>
  );
};

export default SubSchemeDetails;
