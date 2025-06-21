import React, { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import "./CalendarView.css"; 

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Example: medication was taken on 5th and 10th
  const takenDates = {
    [new Date(2025, 5, 5).toDateString()]: true,
    [new Date(2025, 5, 10).toDateString()]: true,
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar-view-container">
      <div className="calendar-overview-box">
        <CalendarComponent
          currentDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          takenDates={takenDates}
          changeMonth={changeMonth}
        />
      </div>
      <div className="calendar-detail-box">
        <h3>Details for {selectedDate.toDateString()}</h3>
        <div className="calendar-detail-alert">
          <span>🕒</span>
          <strong> Today</strong>
          <p>Monitor Eleanor Thompson's medication status for today.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
