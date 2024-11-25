import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Rules from './components/Rules';
import InvestPage from './components/InvestPage';
import './App.css';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null); // New state for userId

  // Load registration state and team info from localStorage on initial render
  useEffect(() => {
    const registrationState = JSON.parse(localStorage.getItem('isRegistered'));
    const username = JSON.parse(localStorage.getItem('loggedInUsername'));
    const user = JSON.parse(localStorage.getItem('loggedInUserId')); // Retrieve logged-in user info
    if (registrationState && username && user) {
      setIsRegistered(true);
      setUsername(username);
      setUserId(user); // Set userId from localStorage
    }
  }, []);

  const handleRegistration = (username, userId) => {
    setIsRegistered(true);
    setUsername(username);
    setUserId(userId); // Set the userId when registration is successful
    localStorage.setItem('isRegistered', JSON.stringify(true));
    localStorage.setItem('loggedInUsername', JSON.stringify(username));
    localStorage.setItem('loggedInUserId', JSON.stringify(userId)); // Store userId in localStorage
  };

  return (
    <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Registration Route */}
          <Route
            path="/register"
            element={
              isRegistered ? (
                <Navigate to="/rules" replace />
              ) : (
                <Register onRegister={handleRegistration} />
              )
            }
          />

          {/* Rules Page Route */}
          <Route
            path="/rules"
            element={
              isRegistered ? (
                <Rules registeredTeam={username} />
              ) : (
                <Navigate to="/register" replace />
              )
            }
          />

          {/* Invest Page Route */}
          <Route
            path="/invest"
            element={
              isRegistered ? (
                <InvestPage registeredTeam={username} userId={userId} />
              ) : (
                <Navigate to="/register" replace />
              )
            }
          />

          {/* Fallback Route (catch-all) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  );
};

export default App;
