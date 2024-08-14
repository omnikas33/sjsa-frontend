import React from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../Global/PageHeading';
import './mission.css'; 
import MissionIcon from '../icons/Mission.png';
import VisionIcon from '../icons/vision.png';
import AboutUsIcon from '../icons/personal.png';
import GrevIcon from '../icons/Grevience.png';
import MediaIcon from '../icons/video-camera.png';
import BriefHistoryIcon from '../icons/time-management.png';
import DepartmentalStatisticsIcon from '../icons/DepStatastics.png';
import OrganisationalSetupIcon from '../icons/tree.png';
import ContactUsIcon from '../icons/contacts.png';
import ObjectivesIcon from '../icons/objectives.png'
const Mission = () => {
  return (
    <div>
      <section className="about-us-container">
        <div className='container'>
          <div className="row d-flex">
            <div className="col-lg-2">
              <div className="sidebar-container">
                <div className="sidebar-region">
                  <div className="sidebar-block">
                    <div className="sidebar-content">
                      <ul className="sidebar-menu">
                        <li className="sidebar-items">
                          <Link to="/about/brief-history">
                            <img src={BriefHistoryIcon} className='icon mx-3' alt='Brief History Icon' />
                            <h6>Brief History </h6>
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
            <div className="col-lg-10">
  <PageHeading heading="About Us" />
  <div className="section-content">
    <div className='section-heading'>
      <h4><img src={VisionIcon} className='icon mx-3' alt='Vision Icon' />Vision</h4>
    </div>
    <p>Our vision is to create an inclusive society where every individual, irrespective of their social or economic background, has access to equal opportunities and the necessary support to achieve their full potential. We envision a state where social justice prevails, and the dignity and rights of all citizens are upheld.</p>
  </div>
  <div className="section-content">
    <div className='section-heading'>
      <h4><img src={MissionIcon} className='icon mx-3' alt='Mission Icon' />Mission</h4>
    </div>
    <p>The mission of the Social Justice & Special Assistance Department is to promote the educational and economic interests of Scheduled Castes, Scheduled Tribes, and other weaker sections. We are committed to protecting these communities from social injustice and all forms of exploitation, ensuring their integration into the mainstream of society with dignity and equality.</p>
  </div>
  <div className="section-content">
    <div className='section-heading'>
      <h4><img src={AboutUsIcon} className='icon mx-3' alt='About Us Icon' />About Us</h4>
    </div>
    <p>The Social Justice & Special Assistance (SJSA) Department of the Government of Maharashtra is dedicated to ensuring equal opportunities and social justice for the underprivileged classes, including Scheduled Castes, Scheduled Tribes, elderly persons, and individuals with disabilities. Our mission is to promote the educational and economic interests of these communities, safeguard them from social injustice, and provide social security. We strive to implement initiatives that alleviate poverty and uplift the weaker sections of society, adhering to the constitutional mandates of protection and support for these groups.</p>
    <div className="objectives-list">
      <div className='section-heading'>
        <img src={ObjectivesIcon} className='icon mx-3'  alt='Objectives'/>
        <h4>OBJECTIVES</h4>
      </div>
      <ul>
        <li>Educational Promotion: To enhance the educational opportunities for Scheduled Castes, Scheduled Tribes, and other weaker sections by implementing tailored schemes and initiatives.</li>
        <li>Economic Upliftment: To foster economic growth and self-sufficiency among the underprivileged communities through targeted financial support and development programs.</li>
        <li>Social Protection: To safeguard these communities from social injustice and exploitation, ensuring their rights and interests are protected.</li>
        <li>Integrated Development: To facilitate the holistic development of marginalized groups through comprehensive welfare schemes and support systems.</li>
      </ul>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;
