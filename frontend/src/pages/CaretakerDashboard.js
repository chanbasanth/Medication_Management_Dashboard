import React from "react";
import Navbar from "../components/Navbar";
import MedicationDashboard from "../caretakerCompnents/MedicationDashboard";

const CaretakerDashboard = () => {
    return(
        <div>
          <Navbar currentRole="caretaker"/>
         <div className="caretaker-dashboard">
          <div className="greeting-box">
            <div className="greeting-left">
              <div className="greeting-icon">👤</div>
              <div className="greeting-text">
                <h1>Caretaker Dashboard</h1>
                <p>Ready to stay on track with your medication?</p>
              </div>
            </div>
            <div className="stats-row">
              <div className="stat-card">
                <h1>85%</h1>
                <p className="stat-label">Adherence</p>
              </div>
              <div className="stat-card">
                <h1>5</h1>
                <p className="stat-label">Current Streak</p>
              </div>
              <div className="stat-card">
                <h1>3</h1>
                <p className="stat-label">Missed This Month</p>
              </div>
              <div className="stat-card">
                <h1>4</h1>
                <p className="stat-label">Taken This Week</p>
              </div>
            </div>
            </div>
        </div>
        <MedicationDashboard/>
        </div>
    );
}

export default CaretakerDashboard;