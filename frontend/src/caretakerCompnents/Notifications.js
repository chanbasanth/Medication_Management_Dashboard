import React from "react";
import "./Notifications.css";

const Notifications = ({
  emailEnabled,
  setEmailEnabled,
  alertsEnabled,
  setAlertsEnabled,
}) => {
  return (
    <div className="notifications-container">
      <div className="notification-section">
        <h2>🔔 Notification Preferences</h2>

        <div className="toggle-group">
          <div className="toggle-label">
            <p className="label-title">Email Notifications</p>
            <p className="label-desc">Receive medication alerts via email</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={emailEnabled}
              onChange={() => setEmailEnabled(!emailEnabled)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {emailEnabled && (
          <input
            type="email"
            className="input-field"
            placeholder="caretaker@example.com"
          />
        )}

        <div className="toggle-group">
          <div className="toggle-label">
            <p className="label-title">Missed Medication Alerts</p>
            <p className="label-desc">
              Get notified when medication is not taken on time
            </p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={alertsEnabled}
              onChange={() => setAlertsEnabled(!alertsEnabled)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {alertsEnabled && (
          <div className="alerts-config">
            <label>
              Alert me if medication isn't taken within
              <select>
                <option>2 hours</option>
                <option>4 hours</option>
              </select>
            </label>
            <label>
              Daily reminder time
              <input type="time" defaultValue="20:00" />
            </label>
            <small>Time to check if today's medication was taken</small>
          </div>
        )}
      </div>

      <div className="email-preview-box">
        <h3>📧 Email Preview</h3>
        <div className="preview-content">
          <strong>Subject: Medication Alert - Eleanor Thompson</strong>
          <p>Hello,</p>
          <p>
            This is a reminder that Eleanor Thompson has not taken her
            medication today.
          </p>
          <p>
            Please check with her to ensure she takes her prescribed
            medication.
          </p>
          <p>Current adherence rate: 85% (5-day streak)</p>
        </div>
      </div>

      <button className="save-btn">Save Notification Settings</button>
    </div>
  );
};

export default Notifications;
