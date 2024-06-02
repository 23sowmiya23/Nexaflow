// Footer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Replace '/api/data' with the appropriate backend endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer>
      {data ? (
        <p>{data.footerText}</p> // Assuming your backend returns an object with a property 'footerText'
      ) : (
        <p>Loading...</p>
      )}
    </footer>
  );
};

export default Footer;
