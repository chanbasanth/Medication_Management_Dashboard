import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ currentRole }) => {
  const navigate = useNavigate();

  const handleSwitch = () => {
    if (currentRole === 'patient') {
      navigate('/caretaker-dashboard');
    } else {
      navigate('/patient-dashboard');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-circle">M</div>
        <div className="logo-text">
          <h3>MediCare Companion</h3>
          <span>{currentRole === 'patient' ? 'Patient View' : 'Caretaker View'}</span>
        </div>
      </div>
      <button className="switch-btn" onClick={handleSwitch}>
        {currentRole === 'patient' ? '👥 Switch to Caretaker' : '👤 Switch to Patient'}
      </button>
    </nav>
  );
};

export default Navbar;
