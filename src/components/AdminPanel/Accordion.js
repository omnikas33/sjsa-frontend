import React, { useState } from 'react';
import './AdminPanel.css';

const Accordion = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleAccordion}>
        <img src={icon} className="icon" alt={`${title} Icon`} />
        {title}
        {isOpen ? <i className="bi bi-dash"></i> : <i className="bi bi-plus"></i>}
      </button>
      <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
