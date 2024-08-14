import React from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../Global/PageHeading';
import ActsIcon from './Icons/ActsRules.png';
import RtiIcon from './Icons/RTI.png';
import GrIcon from './Icons/GR.png';
import ebookIcon from './Icons/e-book.png';
import CircularIcon from './Icons/circulars.png';
import FormsIcon from './Icons/Forms.png';
import AdsIcon from './Icons/ads.png';
import DepIcon from './Icons/safety.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const actsAndRules = [
  { id: 1, name: 'The Rights Of Persons With Disabilities Act, 2016', clause: '49 of 2016', date: '28 December 2016', document: '(1.13 MB)', documentUrl: '/docs/righs-of-pwd-act-2016.pdf' },
  { id: 2, name: 'PWD Act 1995 Notification', clause: 'NA', date: '01 January 1996', document: '(1.71 MB)', documentUrl: '/docs/pwd-act-1995-notification-in-eng.pdf' },
  { id: 3, name: 'PWD Act 1995', clause: '1 of 1996', date: '01 January 1996', document: '(172 KB)', documentUrl: '/path/to/document3.pdf' },
  { id: 4, name: 'The Rights of Persons with Disabilities Act, 2016 (Center)', clause: '49 of 2016', date: '27 December 2016', document: '(1.13 MB)', documentUrl: '/path/to/document4.pdf' },
  { id: 5, name: 'The Maintenance & Welfare of Parents & Senior Citizen Act, 2007 (State - Social Justice Department)', clause: '56 of 2007', date: '04 May 2011', document: '(1.08 MB)', documentUrl: '/path/to/document5.pdf' },
  { id: 6, name: 'The Maintenance & Welfare of Parents & Senior Citizen Act, 2007 (State - Revenue & Forest Department)', clause: '56 of 2007', date: '28 September 2010', document: '(2.90 MB)', documentUrl: '/path/to/document6.pdf' },
  { id: 7, name: 'The Maintenance And Welfare of Parents and Senior Citizens Act, 2007 (Center)', clause: '56 of 2007', date: '29 December 2007', document: '(82 KB)', documentUrl: '/path/to/document7.pdf' },
  { id: 8, name: 'Maintenance And Welfare of Parents and Senior Citizens Rules, 2010 (State)', clause: '86 of 2010', date: '23 January 2010', document: '(4.55 MB)', documentUrl: '/path/to/document8.pdf' },
];

const ActsAndRules = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <PageHeading heading='Acts And Rules'/>
      <div className="row">
        <nav className="col-lg-3 col-md-4 col-sm-12 mb-3 mb-md-0">
          <div className="sidebar">
            <div className="sidebar-container">
              <div className="sidebar-content">
                <ul className="sidebar-menu">
                  <li className="sidebar-items">
                    <Link to="/e-citizen/acts-rules" className="sidebar-link">
                      <img src={ActsIcon} className="icon" alt="Acts And Rules Icon" />
                      <h6>Acts And Rules</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/e-citizen/right-to-information" className="sidebar-link">
                      <img src={RtiIcon} className="icon" alt="Right To Information Icon" />
                      <h6>Right To Information</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/e-citizen/government-resolutions" className="sidebar-link">
                      <img src={GrIcon} className="icon" alt="GR Icon" />
                      <h6>GR</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/e-citizen/e-books" className="sidebar-link">
                      <img src={ebookIcon} className="icon" alt="E-Books Icon" />
                      <h6>E- Books</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/circulars-letters" className="sidebar-link">
                      <img src={CircularIcon} className="icon" alt="Circulars/Letters Icon" />
                      <h6>Circulars/Letters</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/forms" className="sidebar-link">
                      <img src={FormsIcon} className="icon" alt="Forms Icon" />
                      <h6>Forms</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/advertise" className="sidebar-link">
                      <img src={AdsIcon} className="icon" alt="Advertise Icon" />
                      <h6>Advertise</h6>
                    </Link>
                  </li>
                  <li className="sidebar-items">
                    <Link to="/departmental-information" className="sidebar-link">
                      <img src={DepIcon} className="icon" alt="Departmental Information Icon" />
                      <h6>Departmental Information</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <main className="col-lg-9 col-md-8 col-sm-12">
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th>Sr No</th>
                <th>Act & Rule Name</th>
                <th>Act Clause No.</th>
                <th>Date of Act</th>
                <th>Documents</th>
              </tr>
            </thead>
            <tbody>
              {actsAndRules.map((act, index) => (
                <tr key={act.id}>
                  <td>{index + 1}</td>
                  <td>{act.name}</td>
                  <td>{act.clause}</td>
                  <td>{act.date}</td>
                  <td>
                    <a href={act.documentUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      {act.document}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default ActsAndRules;
