import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SchemeForm from './SchemeForm'; // Form for adding a new scheme
import EditSchemeForm from './EditSchemeModal'; // Form for editing an existing scheme
import SchemeList from './SchemeList'; // Component to display schemes

const ModuleSchemes = () => {
  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState('');
  const [selectedModuleName, setSelectedModuleName] = useState('');
  const [schemes, setSchemes] = useState([]);
  const [editingSchemeId, setEditingSchemeId] = useState(null);
  const [editingScheme, setEditingScheme] = useState(null); // To hold the scheme details for editing
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch modules when component mounts
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

  useEffect(() => {
    // Fetch schemes when selected module changes
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
    const selectedId = e.target.value;
    const selectedModule = modules.find(module => module.id === selectedId);
    setSelectedModuleId(selectedId);
    setSelectedModuleName(selectedModule ? selectedModule.name : '');
  };

  const handleEdit = (schemeId) => {
    const schemeToEdit = schemes.find(scheme => scheme.id === schemeId);
    setEditingScheme(schemeToEdit);
    setEditingSchemeId(schemeId);
  };

  const handleUpdate = (updatedScheme) => {
    setSchemes(schemes.map(scheme =>
      scheme.id === updatedScheme.id ? updatedScheme : scheme
    ));
    setEditingSchemeId(null);
    setEditingScheme(null);
  };

  const handleCancelEdit = () => {
    setEditingSchemeId(null);
    setEditingScheme(null);
  };

  const handleAdd = (newScheme) => {
    setSchemes([...schemes, newScheme]);
  };

  const handleDelete = async (schemeId) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5001/api/schemes/${schemeId}`);
      setSchemes(schemes.filter(scheme => scheme.id !== schemeId));
      toast.success('Scheme deleted successfully');
    } catch (error) {
      console.error('Error deleting scheme:', error);
      toast.error('Failed to delete scheme');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <label>Select Module:</label>
        <select
          value={selectedModuleId}
          onChange={handleModuleChange}
          disabled={loading}
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
        <SchemeList
          schemes={schemes}
          selectedModuleName={selectedModuleName}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <SchemeForm
        selectedModuleId={selectedModuleId}
        onSchemeAdded={handleAdd}
      />

      {editingSchemeId && (
        <EditSchemeForm
          scheme={editingScheme} // Pass the scheme details for editing
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default ModuleSchemes;
