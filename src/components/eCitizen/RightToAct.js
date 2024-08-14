import React, { useState } from 'react';
import '../CSS/RightToAct.css'; // Import CSS file for styling
import PageHeading from '../Global/PageHeading';

const tableData1 = [
  { id: 1, office: 'Commissionerate of Disability Affairs', letterNo: 'क्र. अकआ/माउअ/माहिती/रवका/२०१६-१७/२८७४', date: '4th October 2016', document: 'rti-disability.pdf', documentSize: '1.71 MB' },
  // Add more rows as needed
];

const tableData2 = [
  { id: 1, office: 'Social Justice and Special Assistance Department', letterNo: 'क्र. अकआ/माउअ/माहिती/रवका/२०१६-१७/२८७५', date: '5th October 2016', document: 'rti-social-justice.pdf', documentSize: '2.01 MB' },
  // Add more rows as needed
];

const tableData4 = [
  { id: 1, office: 'Divisional Caste Validity Committee', letterNo: 'क्र. अकआ/माउअ/माहिती/रवका/२०१६-१७/२८७७', date: '7th October 2016', document: 'rti-divisional-caste.pdf', documentSize: '1.9 MB' },
  // Add more rows as needed
];

const RightToAct = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTable = (data) => (
    <div className="responsiveTable">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name of Office</th>
            <th>Letter No.</th>
            <th>Date</th>
            <th>Document</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.office}</td>
              <td>{item.letterNo}</td>
              <td>{item.date}</td>
              <td>
                <a href={`/public/docs/${item.document}`} target="_blank" rel="noopener noreferrer">
                  <img src="/images/PDF_doc.png" alt="Adobe Acrobat Reader" />
                </a>
                <span className="fileSize">({item.documentSize})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContentForTab3 = () => (
    <div className="tab3-content">
      <div className="heading-section">
        <h2>Heading 1</h2>
        <p>Details for Heading 1</p>
        <a href="/path/to/your/document1.pdf" download>
          <button className="btn btn-primary">Download PDF</button>
        </a>
      </div>
      <div className="heading-section">
        <h2>Heading 2</h2>
        <p>Details for Heading 2</p>
        <a href="/path/to/your/document2.pdf" download>
          <button className="btn btn-primary">Download PDF</button>
        </a>
      </div>
      <div className="heading-section">
        <h2>Heading 3</h2>
        <p>Details for Heading 3</p>
        <a href="/path/to/your/document3.pdf" download>
          <button className="btn btn-primary">Download PDF</button>
        </a>
      </div>
      <div className="heading-section">
        <h2>Heading 4</h2>
        <p>Details for Heading 4</p>
        <a href="/path/to/your/document4.pdf" download>
          <button className="btn btn-primary">Download PDF</button>
        </a>
      </div>
      <div className="heading-section">
        <h2>Heading 5</h2>
        <p>Details for Heading 5</p>
        <a href="/path/to/your/document5.pdf" download>
          <button className="btn btn-primary">Download PDF</button>
        </a>
      </div>
      <div className="heading-section">
        <h2>Heading 6</h2>
        <p>Details for Heading 6</p>
        <a href="/path/to/your/document6.pdf" download>
          <button className="btn btn-primary">Download PDF</button>
        </a>
      </div>
    </div>
  );

  return (
    <div className="right-to-act-container">
      <PageHeading heading='Right To Information' />
      <div className="mainColumn">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => handleTabClick(0)}
            >
              Tab 1
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => handleTabClick(1)}
            >
              Tab 2
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => handleTabClick(2)}
            >
              Tab 3
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
              onClick={() => handleTabClick(3)}
            >
              Tab 4
            </button>
          </li>
        </ul>
        <div className="tab-content mt-3">
          {activeTab === 0 && renderTable(tableData1)}
          {activeTab === 1 && renderTable(tableData2)}
          {activeTab === 2 && renderContentForTab3()}
          {activeTab === 3 && renderTable(tableData4)}
        </div>
      </div>
    </div>
  );
};

export default RightToAct;
