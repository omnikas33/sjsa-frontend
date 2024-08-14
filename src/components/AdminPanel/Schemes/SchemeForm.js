import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SchemeForm = ({ selectedModuleId, onSchemeAdded }) => {
  const [formData, setFormData] = useState({
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
    application_acceptance_period: '',
    moduleId: selectedModuleId
  });

  const [modules, setModules] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/modules');
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
        toast.error('Failed to fetch modules');
      }
    };

    fetchModules();
  }, []);

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      moduleId: selectedModuleId
    }));
  }, [selectedModuleId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleModuleChange = (e) => {
    const selectedId = e.target.value;
    setFormData({
      ...formData,
      moduleId: selectedId
    });
  };

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key] && key !== 'pdf') {
        newErrors[key] = 'This field is required';
      }
    }
    if (!formData.moduleId) {
      newErrors.moduleId = 'Please select a module';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fill in all required fields');
      return;
    }

    console.log('Submitting form data:', formData); // Log form data

    try {
      const response = await axios.post('http://localhost:5001/api/schemes', formData);
      toast.success('Scheme added successfully!');
      if (onSchemeAdded) onSchemeAdded(response.data);
      setFormData({
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
        application_acceptance_period: '',
        moduleId: selectedModuleId
      });
      setErrors({});
    } catch (error) {
      console.error('Error adding scheme:', error);
      toast.error('Failed to add scheme.');
    }
  };

  return (
    <div>
      <h1>Add New Scheme</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Module:</label>
          <select
            name="moduleId"
            value={formData.moduleId}
            onChange={handleModuleChange}
            required
          >
            <option value="">Select a module</option>
            {modules.map(module => (
              <option key={module.id} value={module.id}>
                {module.name}
              </option>
            ))}
          </select>
          {errors.moduleId && <span className="error">{errors.moduleId}</span>}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div>
          <label>Funding:</label>
          <input
            type="number"
            step="0.01"
            name="funding"
            value={formData.funding}
            onChange={handleInputChange}
            required
          />
          {errors.funding && <span className="error">{errors.funding}</span>}
        </div>
        <div>
          <label>Objective:</label>
          <input
            type="text"
            name="objective"
            value={formData.objective}
            onChange={handleInputChange}
            required
          />
          {errors.objective && <span className="error">{errors.objective}</span>}
        </div>
        <div>
          <label>Beneficiary:</label>
          <input
            type="text"
            name="beneficiary"
            value={formData.beneficiary}
            onChange={handleInputChange}
            required
          />
          {errors.beneficiary && <span className="error">{errors.beneficiary}</span>}
        </div>
        <div>
          <label>Eligibility:</label>
          <input
            type="text"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleInputChange}
            required
          />
          {errors.eligibility && <span className="error">{errors.eligibility}</span>}
        </div>
        <div>
          <label>Benefits:</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits}
            onChange={handleInputChange}
            required
          />
          {errors.benefits && <span className="error">{errors.benefits}</span>}
        </div>
        <div>
          <label>Application:</label>
          <input
            type="text"
            name="application"
            value={formData.application}
            onChange={handleInputChange}
            required
          />
          {errors.application && <span className="error">{errors.application}</span>}
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
          {errors.category && <span className="error">{errors.category}</span>}
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>
        <div>
          <label>Application Form:</label>
          <input
            type="text"
            name="application_form"
            value={formData.application_form}
            onChange={handleInputChange}
          />
          {errors.application_form && <span className="error">{errors.application_form}</span>}
        </div>
        <div>
          <label>PDF:</label>
          <input
            type="text"
            name="pdf"
            value={formData.pdf}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Application Acceptance Period:</label>
          <input
            type="text"
            name="application_acceptance_period"
            value={formData.application_acceptance_period}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SchemeForm;
