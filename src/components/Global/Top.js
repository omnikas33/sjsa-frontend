import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Top = () => {
  return (
    <div className="topbar-area">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="topbar-menu">
              <ul className="d-flex list-unstyled mb-0">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Advertisment</a></li>
                <li><a href="http://mahaawaasabhiyan.in/maa/login">Member Login</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 text-md-right text-center">
            <div className="topbar-social d-flex justify-content-end align-items-center">
              <div className="topbar-date d-none d-lg-inline-block mr-3">
                <i className="fa fa-calendar"></i> Saturday, October 7
              </div>
              <ul className="social-area d-flex list-unstyled mb-0">
                <li><a className="social-icon facebook-icon" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a className="social-icon twitter-icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a className="social-icon youtube-icon" href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a className="social-icon instagram-icon" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
