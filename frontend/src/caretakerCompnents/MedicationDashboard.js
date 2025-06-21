import React, { useState } from "react";
import Overview from "./Overview";
import RecentActivity from "./RecentActivity";
import CalendarView from "./CalendarView";
import Notifications from "./Notifications";
import "./MedicationDashboard.css";

const MedicationDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview setActiveTab={setActiveTab} />;
      case "activity":
        return <RecentActivity />;
      case "calendar":
        return <CalendarView />;
      case "notifications":
        return (
          <Notifications
            emailEnabled={emailEnabled}
            setEmailEnabled={setEmailEnabled}
            alertsEnabled={alertsEnabled}
            setAlertsEnabled={setAlertsEnabled}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className = "caretaker-bottom">
    <div className="app">
      <div className="tabs">
        <button onClick={() => setActiveTab("overview")} className={activeTab === "overview" ? "active" : ""}>Overview</button>
        <button onClick={() => setActiveTab("activity")} className={activeTab === "activity" ? "active" : ""}>Recent Activity</button>
        <button onClick={() => setActiveTab("calendar")} className={activeTab === "calendar" ? "active" : ""}>Calendar View</button>
        <button onClick={() => setActiveTab("notifications")} className={activeTab === "notifications" ? "active" : ""}>Notifications</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
    </div>
  );
};

export default MedicationDashboard;
