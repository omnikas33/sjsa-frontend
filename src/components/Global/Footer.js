import React from 'react';
import Logo from '../../Images/logo.png'; // Import the logo image
import SocialIcons from './SocialIcons'; 
import { FaExternalLinkAlt } from 'react-icons/fa';
import VisitorCount from '../../screens/VisitorCount';

const Footer = () => {
  return (
    <footer className="footer section py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-3 col-md-6">
            <div className="logo mb-4">
              <img src={Logo} alt="SJSALogo"  style={{ maxWidth:'350px' }} />
            </div>
            <SocialIcons /> {/* Assuming SocialIcons component handles social media icons */}
          </div>

          {/* Visitor Count Section */}
          <div className="col-lg-3 col-md-6">
      <div className="widget mb-4">
        <h4 >Quick Links</h4>
        <ul className="quick-links-list list-unstyled">
          <li><a href="#" className="quick-link">Quick Access</a></li>
          <li><a href="#" className="quick-link">About the Site</a></li>
          <li><a href="#" className="quick-link">Website Policies</a></li>
          <li><a href="#" className="quick-link">Navigation Aids</a></li>
          <li><a href="#" className="quick-link">Disclaimer</a></li>
          <li><a href="#" className="quick-link">Accessibility Options</a></li>
          <li><a href="#" className="quick-link">Screen Reader Access</a></li>
          <li><a href="#" className="quick-link">Terms & Conditions</a></li>
          <li><a href="#" className="quick-link">FAQs</a></li>
        </ul>
      </div>
    </div>
          {/* Contact Us Section */}
          <div className="col-lg-3 col-md-6">
            <div className="widget mb-4">
              <h4>Office Contact</h4>
              <ul className="list-unstyled">
                <li className='d-flex'>
                  <i className="fas fa-envelope"></i> 
                  <p> example@example.com</p>
                </li>
                <li className='d-flex'>
                  <i className="fas fa-phone"></i> 
                  <p>+1234567890</p>
                </li>
              </ul>
              <VisitorCount/>
            </div>
          </div>

          {/* Location Section */}
          <div className="col-lg-3 col-md-6">
            <div className="widget mb-4">
              <h4> Location</h4>
              {/* Add Google Maps iframe here */}
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.7820702897984!2d73.87125159595628!3d18.493528082594885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1722923706536!5m2!1sen!2sin" 
                width="100%" height="150" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        {/* Additional Links Section */}

        {/* Copyright Section */}
        <div className="row">
      <div className="col-lg-12 text-start d-flex">
        <div className='col-lg-9'>
        <p className="footer-text mb-2">Copyright © 2024 Department of Social Justice & Special Assistance, Government of Maharashtra.</p>
        <p className="footer-text mb-2">Last updated on <strong>July 12, 2024.</strong></p>
        <p className="footer-text mb-1">Designed And Developed For <strong>Social Justice & Special Assistance Department</strong></p>

        </div>
        <div className='col-lg-3'>
        <p className="footer-text mb-0">© SJSA designed, developed & hosted by National Informatics Centre, Ministry of Electronics & Information Technology, Government of India. <a href='https://www.nic.in/' className="footer-link" target="_blank" rel="noopener noreferrer">
          NIC <FaExternalLinkAlt className="icon" />
        </a> </p>

        </div>
      </div>
    </div>  
        </div>
    </footer>
  );
};

export default Footer;
