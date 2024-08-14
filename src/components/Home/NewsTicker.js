import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsTicker = () => {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div className="news-ticker-container">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="news-ticker">
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <div key={notice.id} className="news-item">
              <span className="news-number">{index + 1}. </span>
              <span className="news-text">{notice.notice_text}</span>
              <span className="news-date">{new Date(notice.notice_date).toLocaleDateString()}</span>
            </div>
          ))
        ) : (
          <p>No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsTicker;
