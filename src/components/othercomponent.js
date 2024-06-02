
// OtherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OtherComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/other-data'); // Replace '/api/other-data' with the appropriate backend endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching other data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.otherComponentText}</p> // Assuming your backend returns an object with a property 'otherComponentText'
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OtherComponent;
