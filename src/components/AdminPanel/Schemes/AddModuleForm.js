import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddModuleForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with name:', name); // Debug statement

    axios.post('http://localhost:5001/api/modules', { name })
      .then(response => {
        console.log('Response from server:', response); // Debug statement
        toast.success('Module added successfully!');
        setName('');
      })
      .catch(error => {
        console.error('Error adding module:', error);
        toast.error('Failed to add module');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Module Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Module</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddModuleForm;
