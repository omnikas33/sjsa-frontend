import React from 'react';
import {Link} from 'react-router-dom'
import PageHeading from '../Global/PageHeading';
import ActsIcon from './Icons/ActsRules.png';
import RtiIcon from './Icons/RTI.png';
import GrIcon from './Icons/GR.png';
import ebookIcon from './Icons/e-book.png';
import CircularIcon from './Icons/circulars.png';
import FormsIcon from './Icons/Forms.png';
import AdsIcon from './Icons/ads.png';
import DepIcon from './Icons/safety.png';


const Gr = () => {
  const data = [
    { srNo: 1, date: '07/03/2024', title: 'सन २०१९-२०, २०२०-२१, २०२१-२२, २०२२-२३ करिता साहित्यरत्न लोकशाहीर अण्णा भाऊ साठे पुरस्कार प्रदान करून व्यक्ती/संस्था यांचा सन्मान करणेबाबत.', documentUrl: 'https://example.com/document1.pdf' },
    { srNo: 2, date: '07/03/2024', title: 'सन २०१९-२०, २०२०-२१, २०२१-२२, २०२२-२३ करिता संत रविदास पुरस्कार प्रदान करुन व्यक्ती / संस्था यांचा सन्मान करणेबाबत.', documentUrl: 'https://example.com/document2.pdf' },
    { srNo: 3, date: '07/03/2024', title: 'सन २०१९-२०, २०२०-२१, २०२१-२२, २०२२-२३ करिता सामाजिक क्षेत्रात काम करणाऱ्या सामाजिक संस्थांना शाहू, फुले, आंबेडकर पारितोषिक प्रदान करून सन्मानित करण्याबाबत.', documentUrl: 'https://example.com/document3.pdf' },
    { srNo: 4, date: '07/03/2024', title: 'सन २०१९-२०, २०२०-२१, २०२१-२२, २०२२-२३ करिता संस्थांना डॉ. बाबासाहेब आंबेडकर सामाजिक न्याय प्राविण्य पुरस्कार प्रदान करून त्यांचा सन्मान करणेबाबत.', documentUrl: 'https://example.com/document4.pdf' },
    { srNo: 5, date: '07/03/2024', title: 'सन २०१९-२०, २०२०-२१, २०२१-२२, २०२२-२३ करिता कर्मवीर पद्मश्री दादासाहेब भाऊराव कृष्णराव गायकवाड पुरस्कार प्रदान करून व्यक्ती/संस्था यांचा सन्मान करणेबाबत.', documentUrl: 'https://example.com/document5.pdf' },
    { srNo: 6, date: '07/03/2024', title: 'सन २०१९-२०,२०२०-२१, २०२१-२२ व २०२२-२३ करिता डॉ. बाबासाहेब आंबेडकर समाजभूषण पुरस्कार प्रदान करून व्यक्ती/संस्था यांचा सन्मान करणेबाबत.', documentUrl: 'https://example.com/document6.pdf' },
    { srNo: 7, date: '21/11/2022', title: 'लाड समितीच्या शिफारशींच्या अनुषंगाने सफाई कामगारांच्या वारसा हक्काच्या अंमलबजावणीबाबत सुधारीत तरतुदीच्या अनुषंगाने मंत्रिमंडळ उपसमिती गठीत करणेबाबत.', documentUrl: 'https://example.com/document7.pdf' },
    { srNo: 8, date: '03/05/2021', title: 'Amendment of Criteria Special Assistance Scheme', documentUrl: 'https://example.com/document8.pdf' },
    { srNo: 9, date: '20/08/2019', title: 'Special Assistance Scheme', documentUrl: 'https://example.com/document9.pdf' },
    { srNo: 10, date: '05/05/2015', title: 'Selection of persons and institutions for Dr. Babasaheb Ambedkar Samjbhushan Puraskar whose remarkable work in social welfare area.', documentUrl: 'https://example.com/document10.pdf' },
    // New data starts here:
    { srNo: 11, date: '02/04/2012', title: 'To change in the name of “Dr. Babasaheb Ambedkar Samajbhushan Puraskar” instead of “Dr. Babasaheb Ambedkar Dalit Mitra Puraskar”.', documentUrl: 'View Document' },
    { srNo: 12, date: '07/02/1996', title: 'Free travels concession for Dalit Mitra Awardee and his/her husband/ wife and colleague', documentUrl: 'View Document' },
    { srNo: 13, date: '17/05/1989', title: '“Dalit Mitra” Award for person and institutions who worked in social welfare area', documentUrl: 'View Document' },
    { srNo: 14, date: '07/04/1986', title: 'Establishment of selection committee', documentUrl: 'View Document' },
    { srNo: 15, date: '19/12/1985', title: '“Dalit Mitra Scheme” for social person whose remarkable works for SC/ST, VJNT, OBC, Physically and Mentally disable person leprosy (For Person)', documentUrl: 'View Document' },
    { srNo: 16, date: '30/10/2015', title: 'Foreign Scholarship for Scheduled Casts student - Selection of Students for the year 2015-16.', documentUrl: 'View Document' },
    { srNo: 17, date: '30/10/2015', title: 'Change in name- Maharashtra State Finance and Development Corporation for persons with disability instead of Maharashtra State Handicapped Finance and Development Corporation.', documentUrl: 'View Document' },
    { srNo: 18, date: '30/11/2015', title: 'Special Case Admission in Government Hostels for Backward Class students.', documentUrl: 'View Document' },
    { srNo: 19, date: '25/08/2015', title: 'Extension to posts on establishment of Indira Gandhi Niradhar Bhumihin shetmajur Mahila Anudan Yojana.', documentUrl: 'View Document' },
    { srNo: 20, date: '17/11/2015', title: 'Special Case admission in Govt. Hostel', documentUrl: 'View Document' },
    { srNo: 21, date: '13/10/2015', title: 'To fix responsibility to Chairman and non-official members of Sanjay Gandhi Niradhar Anudan Yojana Committee.', documentUrl: 'View Document' },
    { srNo: 22, date: '10/11/2015', title: 'Regarding Safai Kamgar/Karmchari.', documentUrl: 'View Document' },
    { srNo: 23, date: '10/09/2015', title: 'Commissioner of social welfare, Government of Maharashtra, Pune, allowing extension of temporary posts.', documentUrl: 'View Document' },
    { srNo: 24, date: '07/11/2015', title: 'Celebration of 26 November as Sanvidhan Divas', documentUrl: 'View Document' },
    { srNo: 25, date: '02/12/2015', title: 'Give compassion in aided of non-aided school for person with disability and workshop.', documentUrl: 'View Document' },
    { srNo: 26, date: '28/08/2015', title: 'Extension to posts on establishment of Sanjay Gandhi Yojana other special assistance schemes.', documentUrl: 'View Document' },
    { srNo: 27, date: '24/11/2015', title: 'Cancelled the Condition in the Foreign Scholarship for SC Students.', documentUrl: 'View Document' },
    { srNo: 28, date: '22/09/2015', title: 'Celebration of Dr.Babasaheb Ambedkars 125th Birth Anniversary as Equality Social Justice', documentUrl: 'View Document' },
    { srNo: 29, date: '25/06/2015', title: 'To Arrange Special Programs on 26 June on Occasion of Rajashri Chatrapati Shahu Maharaj Birthday', documentUrl: 'View Document' },
    { srNo: 30, date: '25/02/2015', title: 'Disturbution of Late Vasantrao Naik Award to Meritotrious Students of VJNT in 10 th and 12th Class Board Examination', documentUrl: 'View Document' },
    { srNo: 31, date: '22/05/2015', title: 'To delegation of power of Transfers of Class -A Class-B officers of social justice department', documentUrl: 'View Document' },
    { srNo: 32, date: '18/06/2015', title: 'To give admission in Government Hostels under Special case.', documentUrl: 'View Document' },
    { srNo: 33, date: '18/03/2015', title: 'To Apply revised admission rules by revised reservation for the students in new 100 govt.Hostel of 100 students capacity and 7 division level hostel of 1000 students capacity.', documentUrl: 'View Document' },
    { srNo: 34, date: '07/08/2015', title: 'Prohibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013.', documentUrl: 'View Document' },
    { srNo: 35, date: '04/08/2015', title: 'To bring Discipline and order in meeting of Sanjay Gandhi Niradhar Anudan Yojana Committee.', documentUrl: 'View Document' },
    { srNo: 36, date: '02/03/2015', title: 'To establish district level caste Certificate Validity Committee.', documentUrl: 'View Document' },
    { srNo: 37, date: '01/08/2015', title: 'To provide opportunity of hearing to beneficiaries found disqualified during verification in line of principal of natural justice.', documentUrl: 'View Document' }
  ];
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

    return (
      <div>
        <PageHeading heading='Government Resolutions'/>
<div className="container ">
      <div className="row">
      <div className='col-lg-3'>
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
</div></div>


</div>
        <div className="col-lg-9 main-content " >
          <div className="responsiveTable">
            <table >
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Document URL</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.srNo}</td>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>
                      <a href={item.documentUrl} target="_blank" rel="noopener noreferrer">Download</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  

      </div>
    );
}

export default Gr;
