// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntegrationPage from './pages/IntegrationPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import SettingsPage from './pages/SettingsPage';
import GoogleIntegrationPage from './pages/GoogleIntegrationPage';
import { isAuthenticated } from './utils/auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/integration"
          element={isAuthenticated() ? <IntegrationPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/google-integration"
          element={isAuthenticated() ? <GoogleIntegrationPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={isAuthenticated() ? <SettingsPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;
