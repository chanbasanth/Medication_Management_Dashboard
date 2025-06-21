import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './PatientDashboard.css';
import MedicationTracker from '../components/MedicationTracker';

const PatientDashboard = () => {
  const [streak, setStreak] = useState(0);
  const [status, setStatus] = useState('⭕');
  const [monthlyRate, setMonthlyRate] = useState('0%');

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  const handleMarkTaken = () => {
    setStreak(prev => prev + 1);
    setStatus('✅');
    setMonthlyRate('3%');
  };

  return (
    <div>
      <Navbar currentRole="patient" />
      <div className="patient-dashboard">
        <div className="container-box">
          <div className="greeting-box">
            <div className="greeting-left">
              <div className="greeting-icon">👤</div>
              <div className="greeting-text">
                <h2>{getGreeting()}</h2>
                <p>Ready to stay on track with your medication?</p>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <p className="stat-value">{streak}</p>
                <p className="stat-label">Day Streak</p>
              </div>
              <div className="stat-card">
                <p className="stat-value">{status}</p>
                <p className="stat-label">Today's Status</p>
              </div>
              <div className="stat-card">
                <p className="stat-value">{monthlyRate}</p>
                <p className="stat-label">Monthly Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-box2'>
      <div className="container-box1">
          <MedicationTracker onMarkTaken={handleMarkTaken} />
        </div>
    </div>
    </div>
  );
};

export default PatientDashboard;
