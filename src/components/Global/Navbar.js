import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon1 from '../../Images/Icons/Home.png';
import icon2 from '../../Images/Icons/About.png';
import icon3 from '../../Images/Icons/Allied-ofc.png';
import icon4 from '../../Images/Icons/Corporations.png';
import icon5 from '../../Images/Icons/Institutions.png';
import icon6 from '../../Images/Icons/Schemes.png';
import icon7 from '../../Images/Icons/E-citizens.png';
import icon8 from '../../Images/Icons/Beneficieries.png';
import icon9 from '../../Images/Icons/RTS.png';
import icon10 from '../../Images/Icons/Dashboard.png';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`} >
      <div className="navbar-header">
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <li className="top-level-link">
          <Link className="mega-menu" to="/" onClick={handleClick}>
            <img src={icon1} className='icon' alt='Home Icon' />
            <span>Home</span>
          </Link>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu"  onClick={handleClick}>
            <img src={icon2} className='icon' alt='About Icon' />
            <span>About us</span>
          </Link>
          <div className="sub-menu-block d-print-none">
            <ul className="sub-menu-lists">
              <li><Link to="/about/brief-history" onClick={handleClick}>Brief HISTORY</Link></li>
              <li><Link to="/about/mission" onClick={handleClick}>MISSION</Link></li>
              <li><Link to="/about/departmental-statistics" onClick={handleClick}>Departmental Statistics</Link></li>
              <li><Link to="/about/org-setup" onClick={handleClick}>Organizational Setup</Link></li>
              <li><Link to="/about/ContactUs" onClick={handleClick}>Contact Us</Link></li>
            </ul>
          </div>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/allied-offices" onClick={handleClick}>
            <img src={icon3} className='icon' alt='Allied Offices Icon' />
            <span>Allied Offices</span>
          </Link>
          <div className="sub-menu-block d-print-none">
            <div className="row">
              <div className="col-xl-6 pr-xl-0">
                <ul className="sub-menu-lists">
                  <li><Link to="/allied-offices/commissioner-social-welfare" onClick={handleClick}>Commissioner Social Welfare, Pune</Link></li>
                  <li><Link to="/allied-offices/barti-pune" onClick={handleClick}>BARTI, PUNE</Link></li>
                  <li><Link to="/allied-offices/maharashtra-state-backward-class-communication" onClick={handleClick}>MAHARASHTRA STATE BACKWARD CLASS COMMUNICATION</Link></li>
                  <li><Link to="/allied-offices/maharashtra-state-commission-for-sc-st" onClick={handleClick}>MAHARASHTRA State Commission For SC&ST</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/corporations" onClick={handleClick}>
            <img src={icon4} className='icon' alt='Corporation Icon' />
            <span>Corporations</span>
          </Link>
          <div className="sub-menu-block d-print-none">
            <div className="row">
              <div className="col-xl-6 pr-xl-0">
                <ul className="sub-menu-lists">
                  <li><Link to="/corporations/mahatma-phule-backward-class-development-corp" onClick={handleClick}>Mahatma Phule Backward Class Development Corp LTD</Link></li>
                  <li><Link to="/corporations/maharashtra-state-handicapped-finance-development-corp" onClick={handleClick}>Maharashtra State Handicapped Finance & Development Corporation</Link></li>
                  <li><Link to="/corporations/sant-rohidas-leather-industries-charmakar-development-corp" onClick={handleClick}>Sant Rohidas Leather Industries & Charmakar Development Corporation</Link></li>
                  <li><Link to="/corporations/maharashtra-state-backward-class-communication" onClick={handleClick}>MAHARASHTRA STATE BACKWARD CLASS COMMUNICATION</Link></li>
                  <li><Link to="/corporations/lokshahir-annabhau-sahte-dev-co-ltd" onClick={handleClick}>Lokshahir Annabhau Sahte DEV.CO.LTd</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/institutions" onClick={handleClick}>
            <img src={icon5} className='icon' alt='Institutions Icon' />
            <span>Institutions</span>
          </Link>
          <div className="sub-menu-block d-print-none">
            <div className="row">
              <div className="col-xl-6 pr-xl-0">
                <ul className="sub-menu-lists">
                  <li><Link to="/institutions/ashram-schools" onClick={handleClick}>Ashram Schools</Link></li>
                  <li><Link to="/institutions/residential-schools" onClick={handleClick}>Residential Schools</Link></li>
                  <li><Link to="/institutions/hostels" onClick={handleClick}>Hostels</Link></li>
                  <li><Link to="/institutions/other-institutions" onClick={handleClick}>Other Institutions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/schemes" onClick={handleClick}>
            <img src={icon6} className='icon' alt='Schemes Icon' />
            <span>Schemes</span>
          </Link>
          <div className="sub-menu-block d-print-none">
            <div className="row">
              <div className="col-xl-6 pr-xl-0">
                <ul className="sub-menu-lists">
                  <li><Link to="/SrCitizen" onClick={handleClick}>SR. Citizen</Link></li>
                  <li><Link to="/schemes/education-training" onClick={handleClick}>Education & Training</Link></li>
                  <li><Link to="/schemes/economic-upliftment" onClick={handleClick}>Economic Upliftment</Link></li>
                  <li><Link to="/schemes/employment" onClick={handleClick}>Employment</Link></li>
                  <li><Link to="/schemes/special-assistance" onClick={handleClick}>Special Assistance</Link></li>
                  <li><Link to="/schemes/disability-welfare" onClick={handleClick}>Disability Welfare</Link></li>
                  <li><Link to="/schemes/social-integration" onClick={handleClick}>Social Integration</Link></li>
                  <li><Link to="/schemes/social-remedies" onClick={handleClick}>Social Remedies</Link></li>
                  <li><Link to="/schemes/awards" onClick={handleClick}>Awards</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/e-citizen/acts-rules" onClick={handleClick}>
            <img src={icon7} className='icon' alt='E-Citizen Icon' />
            <span>E-Citizen</span>
          </Link>
          <div className="sub-menu-block d-print-none">
            <div className="row">
              <div className="col-xl-6 pr-xl-0">
                <ul className="sub-menu-lists">
                  <li><Link to="/e-citizen/acts-rules" onClick={handleClick}>Acts & Rules</Link></li>
                  <li><Link to="/e-citizen/right-to-information" onClick={handleClick}>Right TO Information</Link></li>
                  <li><Link to="/e-citizen/government-resolutions" onClick={handleClick}>Government Resolutions</Link></li>
                  <li><Link to="/e-citizen/e-books" onClick={handleClick}>E-Books</Link></li>
                  <li><Link to="/e-citizen/gr" onClick={handleClick}>Circulars/Letters</Link></li>
                  <li><Link to="/e-citizen/nagari-suvitras" onClick={handleClick}>Forms</Link></li>
                  <li><Link to="/e-citizen/nagari-suvitras" onClick={handleClick}>Advertise</Link></li>
                  <li><Link to="/e-citizen/nagari-suvitras" onClick={handleClick}>Department Information</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/beneficiary" onClick={handleClick}>
            <img src={icon8} className='icon' alt='Beneficiary Icon' />
            <span>Beneficiaries</span>
          </Link>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/rts-act" onClick={handleClick}>
            <img src={icon9} className='icon' alt='RTI Icon' />
            <span>RTS</span>
          </Link>
        </li>
        <li className="top-level-link">
          <Link className="mega-menu" to="/department" onClick={handleClick}>
            <img src={icon10} className='icon' alt='Admin Icon' />
            <span>Department</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
