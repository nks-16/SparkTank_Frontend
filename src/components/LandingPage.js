import React from 'react';
import {  useNavigate } from 'react-router-dom';  // Import Link for navigation
import './LandingPage.css';
import backgroundImage from '../images/finance.jpg';

const LandingPage = () => {
  const navigate=useNavigate();
  return (
    <div
      className="LandingPage"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.3), rgba(30, 60, 114, 0.3)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{
        maxWidth:"60%",
        backgroundColor:"transparent",
        padding:"40px",
        borderRadius:"20px",
        border:"2px solid white",
        backdropFilter:"blur(5px)"
      }}>
        <h1>Welcome to Spark Tank Event</h1>
        <p>Pitch your ideas, invest wisely, and win big!</p>
        <div id="description">
          <h2 id="about">About the Event</h2>
          <p id="content">
            Join us for an exhilarating experience where creativity meets strategy! Teams will pitch their innovative business ideas, invest in each other's companies, and compete for the ultimate title.
          </p>
        </div>
        <div style={{ marginTop: "25px" }}>
          <button onClick={()=>navigate("/register")} style={{
            padding:"15px 25px",
            color:"white",
            border:"2px solid black",
            borderRadius:"10px",

          }} id="get-btn" >Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;