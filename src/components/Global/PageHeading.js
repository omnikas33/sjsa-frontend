import React from 'react';
import './PageHeading.css';
import headingImage from '../icons/underline.png'; 

const PageHeading = ({ heading }) => {
  return (
    <div className="pageHeading my-1">
      <h2>{heading}</h2>
      <img src={headingImage} alt="Page heading" className="headingImage" />
    </div>
  );
};

export default PageHeading;
