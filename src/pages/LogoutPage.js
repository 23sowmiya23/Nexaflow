// frontend/src/pages/LogoutPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Call the logout function when the component mounts
    logout();
    // Redirect the user to the login page
    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
