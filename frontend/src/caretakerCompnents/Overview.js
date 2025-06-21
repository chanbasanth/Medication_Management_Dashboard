import React from "react";
import "./Overview.css"; // ✅ Link the CSS file

const Overview = ({ setActiveTab }) => (
  <div className="overview-wrapper">
    <div className="status-box blur-on-overview">
      <h2>Today's Status</h2>
      <div className="status-card">
        <div className="status-info">
          <p className="medication-text">Daily Medication Set</p>
          <span className="time-text">8:00 AM</span>
        </div>
        <div className="status-pill">Pending</div>
      </div>
    </div>

    <div className="quick-actions blur-on-overview">
      <h2>Quick Actions</h2>
      <button onClick={() => alert("I sent mail to Chandu")}>
        📧 Send Reminder Email
      </button>
      <button onClick={() => setActiveTab("notifications")}>
        ⚙️ Configure Notifications
      </button>
      <button onClick={() => setActiveTab("calendar")}>
        🗓️ View Full Calendar
      </button>
    </div>

    <div className="progress blur-on-overview">
      <h2>Monthly Adherence Progress</h2>
      <div className="progress-container">
        <div className="progress-bar">
          <div className="filled" style={{ width: "85%" }}></div>
        </div>
        <div className="progress-texts">
          <span className="taken">22 days Taken</span>
          <span className="missed">3 days Missed</span>
          <span className="remaining">5 days Remaining</span>
          <span className="percentage">85%</span>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;

