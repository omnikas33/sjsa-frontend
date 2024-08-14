import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/visitor-count');
        setVisitorCount(response.data.visitorCount);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();  
    const interval = setInterval(fetchVisitorCount, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="visitor-count">
      <h6>Current Visitors: {visitorCount}</h6>
    </div>
  );
};

export default VisitorCount;
