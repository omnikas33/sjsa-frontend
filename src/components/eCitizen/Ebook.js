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

// Define the ebooks array (removed duplicates)
const ebooks = [
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  { srNo: 1, title: 'Vikasachya Paulkhuna', documentUrl: 'vikasachya-paulkhuna-160516.pdf' },
  { srNo: 2, title: 'Aarakshan Dhoran', documentUrl: 'Arakshan_Dhoran_Ver1.pdf' },
  
  
  ];
  
// Component definition for Ebook as a functional component
const Ebook = () => (
  <div className="container">
    <PageHeading heading='E-Books'/>
    <div className="row">
      <nav className="col-lg-3 col-md-3 col-sm-4">
        <div className="sidebar">
          <div className="sidebar-container">
            <div className="sidebar-content">
              <Link to="/e-citizen/acts-rules" className="sidebar-item">
                <img src={ActsIcon} className="icon" alt="Acts And Rules Icon" />
                Acts And Rules
              </Link>
              <Link to="/e-citizen/right-to-information" className="sidebar-item">
                <img src={RtiIcon} className="icon" alt="Right To Information Icon" />
                Right To Information
              </Link>
              <Link to="/e-citizen/government-resolutions" className="sidebar-item">
                <img src={GrIcon} className="icon" alt="GR Icon" />
                GR
              </Link>
              <Link to="/e-citizen/e-books" className="sidebar-item">
                <img src={ebookIcon} className="icon" alt="E-Books Icon" />
                E-Books
              </Link>
              <Link to="/circulars-letters" className="sidebar-item">
                <img src={CircularIcon} className="icon" alt="Circulars/Letters Icon" />
                Circulars/Letters
              </Link>
              <Link to="/forms" className="sidebar-item">
                <img src={FormsIcon} className="icon" alt="Forms Icon" />
                Forms
              </Link>
              <Link to="/advertise" className="sidebar-item">
                <img src={AdsIcon} className="icon" alt="Advertise Icon" />
                Advertise
              </Link>
              <Link to="/departmental-information" className="sidebar-item">
                <img src={DepIcon} className="icon" alt="Departmental Information Icon" />
                Departmental Information
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="col-lg-9 col-md-9 col-sm-8">
        <table >
          <thead className="thead-light">
            <tr>
              <th>Sr No</th>
              <th>E-book Title</th>
              <th>E-book Document</th>
            </tr>
          </thead>
          <tbody>
            {ebooks.map(ebook => (
              <tr key={ebook.srNo}>
                <td>{ebook.srNo}</td>
                <td>{ebook.title}</td>
                <td>
                  <a href={ebook.documentUrl} className="delete-btn" target="_blank" rel="noopener noreferrer">
                    Download
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

export default Ebook;
