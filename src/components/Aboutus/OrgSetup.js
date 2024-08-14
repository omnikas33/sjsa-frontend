import React, { useState } from 'react';
import '../CSS/org.css'
import { Link } from 'react-router-dom';
import PageHeading from '../Global/PageHeading';
import './mission.css'; 
import MissionIcon from '../icons/Mission.png'
import VisionIcon from '../icons/vision.png'
import AboutUsIcon from '../icons/personal.png'
import GrevIcon from '../icons/Grevience.png'
import MediaIcon from '../icons/video-camera.png'
import BriefHistoryIcon from '../icons/time-management.png'
import DepartmentalStatisticsIcon from '../icons/DepStatastics.png';
import OrganisationalSetupIcon from '../icons/tree.png'
import ContactUsIcon from '../icons/contacts.png'

import Sjsa from './Icons/sjsa.png'
import Commissioner from './Icons/Commissioner.png'
import Regional from './Icons/RegionalChart.png'
import Administrative from './Icons/Administrative.png'
import img1 from './Charts/Social Justice And Special Assistance_page-0001.jpg';
import img2 from './Charts/Commissioner_page-0001.jpg';
import img3 from './Charts/Regional Chart_page-0001.jpg';
import img4 from './Charts/Organization Structure Chart Infographic Graph.png';
import img5 from './Charts/Organization Structure Chart Infographic Graph.png';

const Org_Setup = () => {
    const [selectedImage, setSelectedImage] = useState(img1);

    const handleDropdownClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <div className='container'> 
            <div className='row d-flex'>
            <div className='col-lg-2'>
                <div className='sidebar-container'>
                <div className="sidebar-block">
                 <div className="sidebar-content">
                   <ul className="sidebar-menu">
                     <li className="sidebar-items">
                       <Link to="/about/brief-history">
                         <img src={BriefHistoryIcon} className='icon mx-3' alt='Brief History Icon' />
                         <h6>Brief History</h6>
                       </Link>
                     </li>
                     <li className="sidebar-items">
                       <Link to="/about/departmental-statistics">
                         <img src={DepartmentalStatisticsIcon} className='icon mx-3' alt='Departmental Statistics Icon' />
                         <h6>Departmental Statistics</h6>
                       </Link>
                     </li>
                     <li className="sidebar-items">
                       <Link to="/about/org-setup">
                         <img src={OrganisationalSetupIcon} className='icon mx-3' alt='Organisational Setup Icon' />
                        <h6> Organisational Setup</h6>
                       </Link>
                     </li>
                     <li className="sidebar-items">
                       <Link to="/about/contactUs">
                         
                         <img src={ContactUsIcon} className='icon mx-3' alt='Contact Us Icon' />
                        <h6 >Contact</h6>

                       </Link>
                     </li>
                   </ul>
                 </div>
               </div>
               <div className="sidebar-block">
                <div className="sidebar-content">
                  <div className="sidebar-link-box">
                    <a className="sidebar-link" href="https://grievances.maharashtra.gov.in/en" target="_blank" rel="noopener noreferrer" title="Post Your Grievance">
                      <figure>
                      <img src={GrevIcon} className='icon mx-3' alt='Contact Us Icon' />
                        <figcaption>Post Your Grievance</figcaption>
                      </figure>
                    </a>
                  </div>
                  <div className="sidebar-link-box">
                    <a className="sidebar-link" href="https://sjsa.maharashtra.gov.in/en/media-gallery" title="Media Gallery">
                      <figure>
                      <img src={MediaIcon} className='icon mx-3' alt='Contact Us Icon' />
                        <figcaption>Media Gallery</figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>


                </div>
            </div>
            <div className='col-lg-10'>
            <div className="org-setup-container">
            <div className="dropdowns">
                <div className="dropdown" onClick={() => handleDropdownClick(img1)}>
                <img src={Sjsa} className='icon mx-3' alt='Contact Us Icon' />
                    Social Justice And Special Assistance
                </div>
                <div className="dropdown" onClick={() => handleDropdownClick(img2)}>
                <img src={Commissioner} className='icon mx-3' alt='Contact Us Icon' />
                    Commissioner
                </div>
                <div className="dropdown" onClick={() => handleDropdownClick(img3)}>
                <img src={Regional} className='icon mx-3' alt='Contact Us Icon' />
                    Regional Chart
                </div>
                {/* <div className="dropdown" onClick={() => handleDropdownClick(img4)}>
                    Divisional Caste Validity Committee
                </div> */}
                <div className="dropdown" onClick={() => handleDropdownClick(img5)}>
                <img src={Administrative} className='icon mx-3' alt='Contact Us Icon' />

                    Administration Profile of Corporation
                </div>
            </div>
            <div className="image-display">
                {selectedImage && (
                    <img src={selectedImage} alt="Selected Image" style={{ width: '100%' }} />
                )}
            </div>
        </div>

            </div>


            </div>

            </div>
        </div>
    );
};

export default Org_Setup;
