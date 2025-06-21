import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleContinue = (role) => {
    if (role.role === 'patient') {
      navigate('/patient-dashboard');
    } else {
      navigate('/caretaker-dashboard');
    }
  };

  
  return (
    <div className="dashboard-container">
  <div className="love-icon-container">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="love-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
</div>
  <h1>Welcome to MediCare Companion</h1>
  <p className="subtitle">
    Your trusted partner in medication management. Choose your role to, <br/> get started with personalized features.
  </p>

  <div className="card-wrapper">
    <div className="card patient-card">
      <div className="icon patient-icon">👤</div>
      <h2>I'm a Patient</h2>
      <p>Track your medication schedule and maintain your health records</p>
      <ul>
        <li>Mark medications as taken</li>
        <li>Upload proof photos (optional)</li>
        <li>View your medication calendar</li>
        <li>Large, easy-to-use interface</li>
      </ul>
      
        <button className="btn-patient" onClick={() => handleContinue(user)}>
          Continue as Patient
        </button>
    
    </div>

    <div className="card caretaker-card">
      <div className="icon caretaker-icon">🧑‍🤝‍🧑</div>
      <h2>I'm a Caretaker</h2>
      <p>Monitor and support your loved one's medication adherence</p>
      <ul>
        <li>Monitor medication compliance</li>
        <li>Set up notification preferences</li>
        <li>View detailed reports</li>
        <li>Receive email alerts</li>
      </ul>
        <button className="btn-caretaker" onClick={() => handleContinue(user.role)}>
          Continue as Caretaker
        </button>

    </div>
  </div>
</div>

  );
};

export default Dashboard;