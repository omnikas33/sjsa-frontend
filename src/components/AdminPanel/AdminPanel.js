import React, { useState } from 'react';
import './AdminPanel.css';
import UserManagement from './UserManagement.js';
import ImageSlider from './Home/ImageSlider.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CMSIcon from './Icons/app.png';
import SchemesIcon from './Icons/loyalty-card.png';
import UserIcon from './Icons/user.png';
import PageHeading from '../Global/PageHeading.js';
import Accordion from './Accordion'; // Import the Accordion component
import AdminAddMinister from './Home/AdminAddMinister.js';
import Notices from './Home/Notices.js';
import SchemeForm from './Schemes/SchemeForm.js';
import Schemes from './Schemes/Schemes.js';

const AdminPanel = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleChange = (module) => {
    setSelectedModule(module);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  return (
    <div className="admin-panel">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <input type="text" id="mySearch" placeholder="Search.." title="Type in a category" />
          <i className="fas fa-user-shield"></i>
          <span className="top-bar-text">Welcome, Admin!</span>
        </div>
        <div className="top-bar-right">
          <a href="https://www.io.com" className="top-bar-link">
            <i className="fas fa-headset"></i> Support/Grievance
          </a>
          <button className="logout-button" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
      <div className="d-flex">
        <div className="col-lg-3">
          <div className="sidebar-outer">
            {/* <div className="sidebar-header">
              <img src={DashboardIcon} className="icon" alt="Dashboard Icon" />
              <span className="logo-text">
                <h6>Welcome</h6>
              </span>
            </div> */}
            <Accordion title="CMS" icon={CMSIcon}>
              <ul className="list-unstyledd">
                <li className="accordion-item" onClick={() => handleModuleChange('ImageSlider')}>
                  Image Slider
                </li>
                <li className="accordion-item" onClick={() => handleModuleChange('ImportantNotice')}>
                  Important Notice
                </li>
                <li className="accordion-item" onClick={() => handleModuleChange('KeyPerson')}>
                  Key Persons
                </li>

              </ul>
            </Accordion>

            <Accordion title="Schemes" icon={SchemesIcon}>
              <ul className="list-unstyledd">
                <li className="accordion-item" onClick={() => handleModuleChange('Schemes')}>
                  Existing Schemes
                </li>
                <li className="accordion-item" onClick={() => handleModuleChange('NewSchemes')}>
                  Add New Scheme
                </li>
                <li className="accordion-item" onClick={() => handleModuleChange('KeyPerson')}>
                  2
                </li>

              </ul>
            </Accordion>
            <Accordion title="User Management" icon={UserIcon}>
              <ul className="list-unstyledd">
                <li className="accordion-item" onClick={() => handleModuleChange('UserManagement')}>
                  User Management
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
        <div className="main-content d-block col-lg-9">
          {selectedModule === 'ImageSlider' && <ImageSlider />}
          {selectedModule === 'ImportantNotice' && <Notices />}
          {selectedModule === 'KeyPerson' && <AdminAddMinister />}

          {/* {selectedModule === 'Schemes' && <ModuleForm />} */}
          {selectedModule === 'Schemes' && <Schemes />}
          {selectedModule === 'NewSchemes' && <SchemeForm />}
          {selectedModule === 'UserManagement' && (
            <div className="module-details">
              <PageHeading heading="User Management" />
              <UserManagement />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
