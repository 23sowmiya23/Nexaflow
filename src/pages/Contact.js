// Contact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get('/api/contact-info');
        setContactInfo(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <div>
      {contactInfo ? (
        <div>
          <h2>Contact Information</h2>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          <p>Address: {contactInfo.address}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Contact;
