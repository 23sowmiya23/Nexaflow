// frontend/src/pages/SettingsPage.js

import React, { useState, useEffect } from 'react';
import './SettingsPage.css'; // Add CSS styles if needed
import api from '../services/api';

const SettingsPage = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const { data } = await api.get('/auth/token');
        setAccessToken(data.accessToken);
      } catch (error) {
        console.error('Error fetching access token', error);
      }
    };
    fetchAccessToken();
  }, []);

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="access-token">
        <h2>Your Access Token</h2>
        <p>{accessToken}</p>
      </div>
    </div>
  );
};

export default SettingsPage;
