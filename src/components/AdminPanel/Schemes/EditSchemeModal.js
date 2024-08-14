import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast } from 'react-toastify';

Modal.setAppElement('#root'); // For accessibility reasons

const EditSchemeModal = ({ isOpen, onClose, scheme }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    funding: '',
    objective: '',
    beneficiary: '',
    eligibility: '',
    benefits: '',
    application: '',
    category: '',
    contact: '',
    application_form: '',
    pdf: '',
    application_acceptance_period: ''
  });

  useEffect(() => {
    if (scheme) {
      setFormData(scheme);
    }
  }, [scheme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5001/api/schemes/${formData.id}`, formData)
      .then(() => {
        toast.success('Scheme updated successfully');
        onClose(); // Close the modal after successful update
      })
      .catch((error) => {
        console.error('Error updating scheme:', error);
        toast.error('Failed to update scheme');
      });
  };

  if (!scheme) {
    return null; // Avoid rendering the modal if there's no scheme
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit Scheme">
      <h2>Edit Scheme</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Funding:
          <input
            type="text"
            name="funding"
            value={formData.funding || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Objective:
          <input
            type="text"
            name="objective"
            value={formData.objective || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Beneficiary:
          <input
            type="text"
            name="beneficiary"
            value={formData.beneficiary || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Eligibility:
          <input
            type="text"
            name="eligibility"
            value={formData.eligibility || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Benefits:
          <input
            type="text"
            name="benefits"
            value={formData.benefits || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Application:
          <input
            type="text"
            name="application"
            value={formData.application || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Application Form:
          <input
            type="text"
            name="application_form"
            value={formData.application_form || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          PDF:
          <input
            type="text"
            name="pdf"
            value={formData.pdf || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Application Acceptance Period:
          <input
            type="text"
            name="application_acceptance_period"
            value={formData.application_acceptance_period || ''}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update Scheme</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default EditSchemeModal;
