import React from "react";
import "./RecentActivity.css";

const activityData = [
  {
    date: "Monday, June 10",
    time: "8:30 AM",
    status: "completed",
    showPhoto: true
  },
  {
    date: "Sunday, June 9",
    time: "8:15 AM",
    status: "completed",
    showPhoto: false
  },
  {
    date: "Saturday, June 8",
    time: null,
    status: "missed",
    showPhoto: false
  },
  {
    date: "Friday, June 7",
    time: "8:45 AM",
    status: "completed",
    showPhoto: true
  },
  {
    date: "Thursday, June 6",
    time: "8:20 AM",
    status: "completed",
    showPhoto: false
  }
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h2>Recent Medication Activity</h2>
      <ul>
        {activityData.map((item, index) => (
          <li key={index} className={`activity-item ${item.status}`}>
            <div className="activity-left">
              <span className="status-icon">
                {item.status === "completed" ? "✅" : "⚠️"}
              </span>
              <div className="activity-info">
                <strong>{item.date}</strong>
                <div className="time-text">
                  {item.status === "missed"
                    ? "Medication missed"
                    : `Taken at ${item.time}`}
                </div>
              </div>
            </div>
            <div className="activity-right">
              {item.status === "completed" && (
                <>
                  {item.showPhoto && (
                    <button className="photo-btn">📷 Photo</button>
                  )}
                  <span className="completed-badge">Completed</span>
                </>
              )}
              {item.status === "missed" && (
                <span className="missed-badge">Missed</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
