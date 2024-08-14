import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeading from '../../Global/PageHeading';

const Notices = () => {
  const [noticeDate, setNoticeDate] = useState('');
  const [noticeText, setNoticeText] = useState('');
  const [notices, setNotices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Fetch notices from the server
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/notices');
        if (Array.isArray(response.data)) {
          setNotices(response.data);
        } else {
          setError('Unexpected response format.');
        }
      } catch (error) {
        setError('Failed to fetch notices. Please try again later.');
        console.error('Error fetching notices:', error.response ? error.response.data : error.message);
      }
    };

    fetchNotices();
  }, []);

  // Add or update notice
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    // Log the form data for debugging
    console.log('Submitting data:', { notice_date: noticeDate, notice_text: noticeText });
    
    try {
      if (editId) {
        // Update existing notice
        const response = await axios.put(`http://localhost:5001/api/notices/${editId}`, { notice_date: noticeDate, notice_text: noticeText });
        setNotices(notices.map(notice => notice.id === editId ? { id: editId, notice_date: noticeDate, notice_text: noticeText } : notice));
        setMessage('Notice updated successfully');
      } else {
        // Add new notice
        const response = await axios.post('http://localhost:5001/api/notices', { notice_date: noticeDate, notice_text: noticeText });
        console.log('Response from adding notice:', response.data);
        setNotices([...notices, response.data]);
        setMessage('Notice added successfully');
      }
      setEditId(null);
      setNoticeDate('');
      setNoticeText('');
    } catch (error) {
      // Log detailed error information
      const errorMessage = error.response ? error.response.data.error : 'Network error';
      setError(`Error saving notice: ${errorMessage}`);
      console.error('Error details:', error.response ? error.response.data : error.message);
    }
  };
    // Delete notice
  const handleDelete = async (id) => {
    setError('');
    try {
      await axios.delete(`http://localhost:5001/api/notices/${id}`);
      setNotices(notices.filter(notice => notice.id !== id));
      setMessage('Notice deleted successfully');
    } catch (error) {
      setError('Error deleting notice. Please try again later.');
      console.error(error);
    }
  };

  // Edit notice
  const handleEdit = (notice) => {
    setNoticeDate(notice.notice_date);
    setNoticeText(notice.notice_text);
    setEditId(notice.id);
  };

  return (
    <div className='card'>
      <PageHeading heading='Imp Notices'/>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit} className='d-flex  my-1'>
        <input
          type="date"
          value={noticeDate}
          onChange={(e) => setNoticeDate(e.target.value)}
          required
          // className="file-input"
        />
        <textarea
          value={noticeText}
          onChange={(e) => setNoticeText(e.target.value)}
          required
          className='mx-4'
        />
        <button type="submit" className="button-upload">
        {editId ? 'Update Notice' : 'Add Notice'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#ffffff" stroke-width="2"></path>
          <path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        
      </button>

      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notices.length > 0 ? (
            notices.map(notice => (
              <tr key={notice.id}>
                <td>{notice.notice_date}</td>
                <td>{notice.notice_text}</td>
                <td>
                  {/* <button onClick={() => handleEdit(notice)}>Edit</button> */}
                  <button className='button-delete tooltip-delete mx-3 my-2'  onClick={() => handleDelete(notice.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span class="tooltiptext-delete">Remove</span>
                </button>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No notices available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Notices;
