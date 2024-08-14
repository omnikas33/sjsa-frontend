import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditSchemeModal from './EditSchemeModal'; // Import the modal component
import PageHeading from '../../Global/PageHeading';

const Schemes = () => {
  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState('');
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingScheme, setEditingScheme] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch modules when component mounts
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5001/api/modules')
      .then(response => {
        setModules(response.data);
      })
      .catch(error => {
        console.error('Error fetching modules:', error);
        toast.error('Failed to fetch modules');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Fetch schemes when selected module changes
  useEffect(() => {
    if (selectedModuleId) {
      setLoading(true);
      axios.get(`http://localhost:5001/api/modules/${selectedModuleId}/schemes`)
        .then(response => {
          setSchemes(response.data);
        })
        .catch(error => {
          console.error('Error fetching schemes:', error);
          toast.error('Failed to fetch schemes');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSchemes([]);
    }
  }, [selectedModuleId]);

  const handleModuleChange = (e) => {
    setSelectedModuleId(e.target.value);
  };

  const handleEditClick = (scheme) => {
    setEditingScheme(scheme);
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteClick = (schemeId) => {
    if (window.confirm('Are you sure you want to delete this scheme?')) {
      setLoading(true);
      axios.delete(`http://localhost:5001/api/schemes/${schemeId}`)
        .then(() => {
          toast.success('Scheme deleted successfully');
          setSchemes(schemes.filter(scheme => scheme.id !== schemeId));
        })
        .catch(error => {
          console.error('Error deleting scheme:', error);
          toast.error('Failed to delete scheme');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  
  return (
    <div>
      <div>
        <PageHeading heading='Schemes Module'/>
        <label>Select Module:</label>
        <select
          value={selectedModuleId}
          onChange={handleModuleChange}
          disabled={loading}
          className='button-delete'
        >
          <option value="">Select a module</option>
          {modules.map(module => (
            <option key={module.id} value={module.id}>
              {module.name}
            </option>
          ))}
        </select>
      </div>

      {selectedModuleId && (
        <div>
          {loading ? (
            <p>Loading schemes...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Scheme Name</th>
                  <th>Module ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {schemes.map(scheme => (
                  <tr key={scheme.id}>
                    <td>{scheme.name}</td>
                    <td>{scheme.module_id}</td>
                    <td>
                        <span className='d-flex gap'>
                        <button className='button-edit' onClick={() => handleEditClick(scheme)}>Edit</button>
                      <button className='button-delete' onClick={() => handleDeleteClick(scheme.id)}>Delete</button>


                        </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      <EditSchemeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scheme={editingScheme}
      />

      <ToastContainer />
    </div>
  );
};

export default Schemes;
