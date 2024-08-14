import React, { useState, useEffect } from 'react';
import { offices } from '../../Data';
import PageHeading from '../Global/PageHeading';

// Commissioner Component
const Commissioner = ({ Commissionerdetails }) => (
  <div className="container">
    <div className="row ">
      <div >
        <div className="card text-center mb-4">
          <div className="card-body">
            <img
              src={Commissionerdetails.image}
              alt={Commissionerdetails.name}
              className=" rounded-circle mx-auto d-block"
              style={{width:'260px'}}
            />
            <h4 className="card-title mt-3">{Commissionerdetails.name}</h4>
            <p className="card-text">{Commissionerdetails.designation}</p>
            <p className="card-text">{Commissionerdetails.office}</p>
            <p className="card-text">{Commissionerdetails.bio}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// Contacts Component
const Contacts = ({ contacts }) => (
  <div >
  <div>
    <table>
    <tr>
    <th>Sr.No</th>
    <th>Name</th>
    <th>Designation</th>
    <th>Contact Number</th>
    <th>Email</th>
  </tr>
      <tbody>
        {contacts.map((contact) => (
    <tr key={contact.srNo}>
    <td>{contact.srNo}</td>
    <td>{contact.name}</td>
    <td>{contact.designation}</td>
    <td>{contact.number}</td>
    <td>{contact.email}</td>
  </tr>
      ))}
      </tbody>
    </table>
  </div>

  </div>
);


// SubSchemes Component with Dropdown Menu
const SubSchemes = ({ subSchemes }) => {
  const [selectedSubScheme, setSelectedSubScheme] = useState(null);

  const handleSubSchemeChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selected = subSchemes.find(subScheme => subScheme.id === selectedId);
    setSelectedSubScheme(selected);
  };

  useEffect(() => {
    setSelectedSubScheme(subSchemes[0] || null);
  }, [subSchemes]);
  return (
    <div className="sub-schemes-container">
      <div className="dropdown mt-2">
        <select onChange={handleSubSchemeChange} value={selectedSubScheme ? selectedSubScheme.id : ''}>
          <option value="">Select Sub-Scheme</option>
          {subSchemes.map(subScheme => (
            <option key={subScheme.id} value={subScheme.id}>{subScheme.name}</option>
          ))}
        </select>
      </div>

      {selectedSubScheme && (
        <div className="scheme-details mt-2">
          <h4>{selectedSubScheme.name}</h4>
          <table  >
            <tbody>
              <tr>
                <td>Funding By</td>
                <td>{selectedSubScheme.details.funding}</td>
              </tr>
              <tr>
                <td>Scheme Objective</td>
                <td>{selectedSubScheme.details.objective}</td>
              </tr>
              <tr>
                <td>Beneficiary Category</td>
                <td>{selectedSubScheme.details.beneficiary}</td>
              </tr>
              <tr>
                <td>Eligibility Criteria</td>
                <td>
                  <ul>
                    {selectedSubScheme.details.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Benefits Provided</td>
                <td>{selectedSubScheme.details.benefits}</td>
              </tr>
              <tr>
                <td>Application Process</td>
                <td>{selectedSubScheme.details.application}</td>
              </tr>
              <tr>
                <td>Category of Scheme</td>
                <td>{selectedSubScheme.details.category}</td>
              </tr>
              <tr>
                <td>Contact Office</td>
                <td>{selectedSubScheme.details.contact}</td>
              </tr>
              <tr>
                <td>Application Form</td>
                <td>{selectedSubScheme.details.applicationForm}</td>
              </tr>
              <tr>
                <td>Application Acceptance Period</td>
                <td>{selectedSubScheme.details.applicationAcceptancePeriod}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// SubTopics Component
const SubTopics = ({ subTopics }) => {
  const [selectedSubTopic, setSelectedSubTopic] = useState(null);

  const handleSubTopicClick = (subTopic) => {
    setSelectedSubTopic(subTopic);
  };

  useEffect(() => {
    setSelectedSubTopic(subTopics[0] || null);
  }, [subTopics]);
  return (
    <div className=" d-flex col-lg-12 ">
      <div className=" mx-5  mb-2 col-lg-2">
        {subTopics.map((subTopic) => (
          <div
            key={subTopic.id}
            className={`sidebar-item ${selectedSubTopic && selectedSubTopic.id === subTopic.id ? 'active' : ''}`}
            onClick={() => handleSubTopicClick(subTopic)}
          >
          <div className="row d-flex justify-content-center align-items-center">
            <img alt="img" className="allied-icon icon" src={subTopic.icon} />
           <h6 className="mb-1 ml-2">{subTopic.name}</h6>
          </div>

          </div>
        ))}
      </div>
      <div className='col-lg-9' >
      {selectedSubTopic && selectedSubTopic.subSchemes && (
        <SubSchemes subSchemes={selectedSubTopic.subSchemes} />
      )}
      {selectedSubTopic && selectedSubTopic.Commissionerdetails && (
        <Commissioner Commissionerdetails={selectedSubTopic.Commissionerdetails} />
      )}
      {selectedSubTopic && selectedSubTopic.contacts && (
        <Contacts contacts={selectedSubTopic.contacts}  />
      )}
      {selectedSubTopic && selectedSubTopic.aboutus && 
(
  <div className="container mt-2 ">
    <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            {/* <h4 className="card-title text-center">About Us</h4> */}
            <PageHeading heading='About Us'/>
            <table >
              <tbody>
                <tr>
                  <th className='Table Th'>Funding By</th>
                  <td>{selectedSubTopic.aboutus.funding}</td>
                </tr>
                <tr>
                  <th>Objective</th>
                  <td>{selectedSubTopic.aboutus.objective}</td>
                </tr>
                <tr>
                  <th>Beneficiary</th>
                  <td>{selectedSubTopic.aboutus.beneficiary}</td>
                </tr>
                <tr>
                  <th>Eligibility Criteria</th>
                  <td>
                    <ul>
                      {selectedSubTopic.aboutus.eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Benefits Provided</th>
                  <td>{selectedSubTopic.aboutus.benefits}</td>
                </tr>
                <tr>
                  <th>Application Process</th>
                  <td>{selectedSubTopic.aboutus.application}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{selectedSubTopic.aboutus.category}</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>{selectedSubTopic.aboutus.contact}</td>
                </tr>
                <tr>
                  <th>Application Form</th>
                  <td>{selectedSubTopic.aboutus.applicationForm}</td>
                </tr>
                <tr>
                  <th>Application Acceptance Period</th>
                  <td>{selectedSubTopic.aboutus.applicationAcceptancePeriod}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
)  
    }
     </div>
    </div>
  );
};

// Main Component
const AlliedOffices = () => {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  const handleOfficeClick = (office) => {
    setSelectedOffice(office);
  };
  useEffect(() => {
    setSelectedOffice(offices[0] || null);
  }, []);


  return (
    <div > 
      <PageHeading heading='Allied Offices'/>
      <div className="tab-container container mt-2 ">
        {offices.map((office) => (
          <div
            key={office.id}
            className={`tab ${selectedOffice.id === office.id ? 'active' : ''}`}
            onClick={() => handleOfficeClick(office)}
          >
          <img alt='img' className='icon' src={office.icon}  />
          <h6 className="mb-0">{office.name}</h6>
          </div>
        ))}
      </div>

      <div className="details-container mt-2">
        {selectedOffice.subTopics && (
          <SubTopics subTopics={selectedOffice.subTopics} />
        )}
      </div>
    </div>
  );
};

export default AlliedOffices;