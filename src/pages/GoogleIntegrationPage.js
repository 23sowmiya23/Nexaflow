// frontend/src/pages/GoogleIntegrationPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoogleIntegrationPage.css'; // Add CSS styles if needed
import api from '../services/api';

const GoogleIntegrationPage = () => {
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/google-sheets/integrate', { spreadsheetId });
      navigate('/settings');
    } catch (error) {
      console.error('Google Sheets integration error', error);
    }
  };

  return (
    <div className="google-integration-page">
      <h1>Google Sheets Integration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Google Sheets Spreadsheet ID"
          value={spreadsheetId}
          onChange={(e) => setSpreadsheetId(e.target.value)}
          required
        />
        <button type="submit">Integrate</button>
      </form>
    </div>
  );
};

export default GoogleIntegrationPage;
