import React from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';
import logo from '../images/nisblogo.png';
import ieeelogo from '../images/ieeelogo.png';

const Rules = () => {
  return (
    <div className="Rules">
      <img src={logo} alt="NISB Logo" className="logo" />
      <img src={ieeelogo} alt="IEEE Logo" className="ieeelogo" />
      <div className="Rules-content">
        <h1>Rules for Spark Tank Event</h1>

        <p>
          Below are the key rules and guidelines for participating in the Spark Tank event:
        </p>
          <>
          <li>
            Each team must present a business plan, highlighting: Unique Selling Points (USPs) , Identified market gap , Marketing strategies ,Future goals.
          </li>
          <li>
            The theme is Open Innovation—teams can pitch any idea, such as a physical product, SaaS, or equipment.
          </li>
          <li>
            Teams will have 15 minutes to refine their idea before presenting. PPTs are optional but visual aids are allowed.
          </li>
          <li>
            Each company starts with an initial valuation of ₹5,000 and a wallet balance of ₹2,000 for investments.
          </li>
          <li>
            After a pitch, other teams can invest in the company by purchasing shares from the public pool (40% of shares are available).
          </li>
          <ul style={{
            fontSize:"1.3rem"
          }}>
            <li>Final scores are based on:
              <ul>
                <li>Judges’ evaluation of the pitch’s quality and viability</li>
                <li>Percentage of shares sold to other teams</li>
              </ul>
            </li>
          </ul>

        </>

        <div className="navigation-buttons">
          <Link to="/invest" className="cta-btn">
            Invest Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;
