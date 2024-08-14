import React from 'react'
import {Link} from 'react-router-dom'
import AboutUsIcon from '../icons/personal.png';
import GrevIcon from '../icons/Grevience.png';
import MediaIcon from '../icons/video-camera.png';
import BriefHistoryIcon from '../icons/time-management.png';
import DepartmentalStatisticsIcon from '../icons/DepStatastics.png';
import OrganisationalSetupIcon from '../icons/tree.png';
import ContactUsIcon from '../icons/contacts.png';


function DepartmentalStatistics() {
  return (
    <div>
      <div className='container'>
        <div className='row d-flex'>
        <div className="col-lg-2">
              <div className="sidebar-container">
                <div className="sidebar-region">
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
                          <Link to="/about/mission">
                            <img src={AboutUsIcon} className='icon mx-3' alt='About Us Icon' />
                            <h6>About Us</h6>
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
                            <h6>Organisational Setup</h6>
                          </Link>
                        </li>
                        <li className="sidebar-items">
                          <Link to="/about/contactUs">
                            <img src={ContactUsIcon} className='icon mx-3' alt='Contact Us Icon' />
                            <h6>Contact</h6>
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
                            <img src={GrevIcon} className='icon mx-3' alt='Grievance Icon' />
                            <figcaption>Post Your Grievance</figcaption>
                          </figure>
                        </a>
                      </div>
                      <div className="sidebar-link-box">
                        <a className="sidebar-link" href="https://sjsa.maharashtra.gov.in/en/media-gallery" title="Media Gallery">
                          <figure>
                            <img src={MediaIcon} className='icon mx-3' alt='Media Gallery Icon' />
                            <figcaption>Media Gallery</figcaption>
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>

      </div>
      
    </div>
  )
}

export default DepartmentalStatistics
