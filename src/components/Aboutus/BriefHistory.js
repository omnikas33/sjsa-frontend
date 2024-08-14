import React, { useEffect, useRef } from 'react';
import PageHeading from '../Global/PageHeading';
import '../CSS/org.css';
import { Link } from 'react-router-dom';
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

const BriefHistory = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.add('fade-out');
          entry.target.classList.remove('fade-in');
        }
      });
    }, {
      threshold: 0.1 // Adjust based on when you want the animation to start
    });

    stepsRef.current.forEach(step => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      stepsRef.current.forEach(step => {
        if (step) {
          observer.unobserve(step);
        }
      });
    };
  }, []);

  const steps = [
    { year: '1928', content: 'Start commission was formed wide, Government Resolution dated 5th November 1928', bgColor: 'brief-history-bg-orange' },
    { year: '1930', content: 'Total 10 member where in corporate in this committees. Dr. Babasaheb Ambedkar was also included in this committee. The committee submitted its report to Government in the year 1930', bgColor: 'brief-history-bg-orange' },
    { year: '1932', content: 'In the year 1932 backward class welfare department was created for the welfare of backward classes. Mr. O. H. B. Start, I.C.S. was the first Director of this department.', bgColor: 'brief-history-bg-orange' },
    { year: '1947', content: 'In the year 1947 the office of Director, backward class welfare, was shifted to Pune from Mumbai', bgColor: 'brief-history-bg-orange' },
    { year: '1947', content: 'The cornerstone of the building of Directorate office was fixed by Hon. Shri. Ganapati Devaji Tapse , Hon. Minister, Industries ,Fishery and Social Welfare on 9th August,1947.', bgColor: 'brief-history-bg-orange' },
    { year: '1957', content: 'Social welfare directorate was created by amalgamating the office of Chief Inspector Certification school and director backward class welfare vide Government Resolution dated 23rd September,1957.', bgColor: 'brief-history-bg-orange' },
    { year: '1972', content: 'In March 1972 Social welfare Department in Mantralaya was created.', bgColor: 'brief-history-bg-orange' },
    { year: '1983', content: 'In 1983 it renamed as Social welfare, Culture affairs, and Sports and Tourism department.', bgColor: 'brief-history-bg-orange' },
    { year: '1993', content: 'In April 1993 tourism subject was transfer to home department', bgColor: 'brief-history-bg-orange' },
    { year: '1999', content: 'Department of welfare of Denoted Tribes ,Nomadic Tribes, Other backward class was created in 1999.', bgColor: 'brief-history-bg-orange' },
    { year: '2001', content: 'In February 2001 Social welfare, culture affairs and sports department was renamed as Social Justice, Culture affairs and Sports Department. After that it renamed as Social Justice and Special Assistance Department.', bgColor: 'brief-history-bg-orange' },
    { year: '1932', content: 'Formation of backward class welfare Department.', bgColor: 'brief-history-bg-white left' },
    { year: '1957', content: 'Formation of Social welfare Directorate in Pune.', bgColor: 'brief-history-bg-white left' },
    { year: '1982', content: 'Separation of Tribal development department.', bgColor: 'brief-history-bg-white left' },
    { year: '1991', content: 'Separation of women and child development department.', bgColor: 'brief-history-bg-white left' },
    { year: '2000', content: 'Creation of Commissioner of disability welfare.', bgColor: 'brief-history-bg-white left' },
    { year: '2001', content: 'Creation of Directorate of welfare of denoted tribes, Nomadic Tribes, other backward classes and Special Backward Classes.', bgColor: 'brief-history-bg-white left' }
  ];

  return (
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
        <div className='col-lg-10 scrollable-container'>
          <div className="brief-history-bg-gradient_solid">
            <PageHeading heading='Brief History'/>
            <div className="brief-history-container">
              <div className="brief-history-steps">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`brief-history-steps-container ${step.bgColor}`}
                    ref={el => (stepsRef.current[index] = el)}
                  >
                    <div className="brief-history-year">{step.year}</div>
                    <div className="brief-history-content">
                      <p className="brief-history-paragraph">{step.content}</p>
                    </div>
                    <i className="brief-history-step-line"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefHistory;
