import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './IntegrationPage.css';

const IntegrationPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get('/auth/user');
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user', error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="integration-page">
      <h1>Welcome, {user.name}</h1>
      {/* Add your Google Sheets integration UI here */}
    </div>
  );
};

export default IntegrationPage;
