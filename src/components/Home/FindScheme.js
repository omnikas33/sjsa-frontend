import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'; // Assuming you use Bootstrap for modals
import Button from 'react-bootstrap/Button'; // Button component from Bootstrap
import SchemesComponent from '../Scheme/SchemesComponent';

const FindScheme = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedScheme, setSelectedScheme] = useState('');

  // Scheme data defined internally within the component
  const schemes = [
    { category: 'Gender', types: ['Male', 'Female'], schemes: ['Scheme1', 'Scheme2'] },
    { category: 'age', types: ['Under 18', '18+'], schemes: ['Scheme3', 'Scheme4'] },
    // Add more objects as needed
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedType('');
    setSelectedScheme('');
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedScheme('');
  };

  const handleSchemeChange = (e) => {
    setSelectedScheme(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as fetching data or displaying results
    // For demonstration, let's log the selected values
    console.log(`Selected Category: ${selectedCategory}, Selected Type: ${selectedType}, Selected Scheme: ${selectedScheme}`);
    // Here you could fetch or perform any backend operations based on the selected values
    // Reset form or close modal if needed
    // setShowModal(false);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Render the component based on selectedScheme
  const renderSchemeComponent = () => {
    switch (selectedScheme) {
      case 'Scheme1':
        return <SchemesComponent />;
      case 'Scheme2':
        return <SchemesComponent />;
      // Add cases for other schemes as needed
      default:
        return null;
    }
  };

  return (
    <div>
      <button className="cta-unique" onClick={handleShowModal}>
        <span>Find Best Scheme For You</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Find Scheme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category:</label>
              <select id="category" className="form-select" value={selectedCategory} onChange={handleCategoryChange} required>
                <option value="">Select Category</option>
                {schemes.map((scheme, index) => (
                  <option key={index} value={scheme.category}>{scheme.category}</option>
                ))}
              </select>
            </div>
            {selectedCategory && (
              <div className="mb-3">
                <label htmlFor="type" className="form-label">Type:</label>
                <select id="type" className="form-select" value={selectedType} onChange={handleTypeChange} required>
                  <option value="">Select Type</option>
                  {schemes
                    .find(scheme => scheme.category === selectedCategory)
                    .types.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                </select>
              </div>
            )}
            {selectedType && (
              <div className="mb-3">
                <label htmlFor="scheme" className="form-label">Scheme:</label>
                <select id="scheme" className="form-select" value={selectedScheme} onChange={handleSchemeChange} required>
                  <option value="">Select Scheme</option>
                  {schemes
                    .find(scheme => scheme.category === selectedCategory && scheme.types.includes(selectedType))
                    .schemes.map((scheme, index) => (
                      <option key={index} value={scheme}>{scheme}</option>
                    ))}
                </select>
              </div>
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <div className="mt-4">
        {/* Render the selected scheme component */}
        {selectedScheme && renderSchemeComponent()}
      </div>
    </div>
  );
};

export default FindScheme;
