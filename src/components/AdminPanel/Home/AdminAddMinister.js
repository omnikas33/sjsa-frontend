import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeading from '../../Global/PageHeading';

const AdminAddMinister = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [ministers, setMinisters] = useState([]);

  useEffect(() => {
    fetchMinisters();
  }, []);

  const fetchMinisters = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/ministers');
      setMinisters(response.data);
    } catch (error) {
      console.error('Error fetching ministers:', error);
      setMessage('Failed to fetch ministers.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('image', image);

    try {
      // Upload the image
      const { data: imageResponse } = await axios.post('http://localhost:5001/api/upload/ministericon', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Save minister details (including image URL)
      await axios.post('http://localhost:5001/api/ministers', {
        name,
        role,
        imageUrl: imageResponse.url
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessage('Minister added successfully!');
      fetchMinisters(); // Refresh the list
      setName('');
      setRole('');
      setImage(null);
    } catch (error) {
      console.error('There was an error adding the minister!', error);
      setMessage('Error adding minister. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, imageUrl) => {
    if (window.confirm('Are you sure you want to delete this minister?')) {
      try {
        // Delete the minister and associated image
        await axios.delete(`http://localhost:5001/api/minister/${id}`, {
          data: { imageUrl }
        });
        setMessage('Minister deleted successfully!');
        fetchMinisters(); // Refresh the list
      } catch (error) {
        console.error('Error deleting minister:', error.response ? error.response.data : error.message);
        setMessage('Failed to delete minister. Please try again.');
      }
    }
  };

  return (
    <div className='card'>
     <PageHeading heading='Add New Minister '/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Role</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <div>
          <label>Image</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>


         <button type="submit" disabled={loading} className='button-add'>
         
           <span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> {loading ? 'Adding...' : 'Add Minister'}
           </span>
         </button>










      </form>
      {message && <p>{message}</p>}
      
      <h2>Existing Ministers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ministers.map((minister) => (
            <tr key={minister.id}>
              <td>{minister.name}</td>
              <td>{minister.role}</td>
              <td>
                {minister.imageUrl && (
                  <img src={minister.imageUrl} alt={minister.name} style={{ width: '100px', height: 'auto' }} />
                )}
              </td>
              <td>
                <button className='button-delete tooltip-delete' onClick={() => handleDelete(minister.id, minister.imageUrl)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span class="tooltiptext-delete">Remove</span>
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAddMinister;
