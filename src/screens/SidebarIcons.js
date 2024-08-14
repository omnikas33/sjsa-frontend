// SocialButtons.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './SidebarIcons.css'; // Assuming you have a CSS file for styling

const SidebarIcons = () => {
    return (
        <div className="social">
            <a href="#">
                Facebook <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
                Youtube <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
                Instagram <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
                Twitter <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    );
};

export default SidebarIcons;
