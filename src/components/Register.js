import React, { useState, useEffect } from 'react';
import './Register.css';
import logo from '../images/nisblogo.png';
import ieeelogo from '../images/ieeelogo.png';

const predefinedIds = [
  '67429a8de55771fcdbfc13df', '67429aebe55771fcdbfc13e1', 
  '67429af1e55771fcdbfc13e3', '67429afce55771fcdbfc13e5',
  '67429b02e55771fcdbfc13e7', '67429b07e55771fcdbfc13e9',
  '67429b0ee55771fcdbfc13eb', '67429b13e55771fcdbfc13ed',
  '67429b18e55771fcdbfc13ef', '67429b1ee55771fcdbfc13f1', 
  '67429b24e55771fcdbfc13f3', '67429b29e55771fcdbfc13f5', 
  '67429b4ce55771fcdbfc13f7', '67429b52e55771fcdbfc13f9', 
  '67429b57e55771fcdbfc13fb', '67429b5ee55771fcdbfc13fd',
  '67429b64e55771fcdbfc13ff', '67429b6ae55771fcdbfc1401',
  '67429b6fe55771fcdbfc1403', '67429b7be55771fcdbfc1405',
  '67429b83e55771fcdbfc1407', '67429b88e55771fcdbfc1409', 
  '67429b8de55771fcdbfc140b', '67429b92e55771fcdbfc140d',
  '67429b97e55771fcdbfc140f', '67429b9de55771fcdbfc1411',
  '67429ba2e55771fcdbfc1413', '67429ba6e55771fcdbfc1415',
  '67429bace55771fcdbfc1417', '67429bb0e55771fcdbfc1419'
];

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Initialize teams in localStorage if not already present
    const existingTeams = JSON.parse(localStorage.getItem('teams'));
    if (!existingTeams) {
      const teams = {};
      for (let i = 1; i <= 30; i++) {
        teams[`team-${i}`] = {
          id: predefinedIds[i - 1],
          username: `team-${i}`,
          password: `password${i}`,
        };
      }
      localStorage.setItem('teams', JSON.stringify(teams));
    }
  }, []);

  const handleRegister = () => {
    const teams = JSON.parse(localStorage.getItem('teams'));
    const team = teams[username];
  
    if (!team) {
      setMessage('Invalid username. Please try again.');
      return;
    }
  
    if (team.password === password) {
      // Store the username as a key-value pair in JSON format in localStorage
      localStorage.setItem('localUsername', JSON.stringify({ username }));
      localStorage.setItem('loggedInUserId',JSON.stringify({ userId: team.id })
      );
      
      setMessage(`Welcome, ${username}! Your team ID is ${team.id}.`);
      onRegister(username, team.id); // Pass both username and userId
    } else {
      setMessage('Invalid password. Please try again.');
    }
  };
  

  return (
    
    <div className="Register">
      <img src={logo} alt="NISB Logo" className="logo" />
      <img src={ieeelogo} alt="IEEE Logo" className="ieeelogo" />
      <h1>Login for Spark Tank</h1>
      <div className="register-box">
        <label htmlFor="username">Team Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your team username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
      {message && (
        <p className={message.includes('Welcome') ? 'success-message' : 'message'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
