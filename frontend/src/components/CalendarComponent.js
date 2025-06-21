import React from 'react';
import './CalendarComponent.css';

const CalendarComponent = ({ currentDate, selectedDate, setSelectedDate, takenDates, changeMonth }) => {
  const today = new Date();

  const getMonthDays = () => {
    const year = currentDate?.getFullYear();
    const month = currentDate?.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const key = date.toDateString();
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();
      const isPast = date < today && !isToday;
      const isTaken = takenDates[key];

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isTaken ? 'taken' : ''} ${isPast && !isTaken ? 'missed' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-box">
      <h3>Medication Calendar</h3>
      <div className="calendar-header">
        <button onClick={() => changeMonth(-12)}>{'<<'}</button>
        <button onClick={() => changeMonth(-1)}>{'<'}</button>
        <span>{currentDate?.toLocaleString('default', { month: 'long' })} {currentDate?.getFullYear()}</span>
        <button onClick={() => changeMonth(1)}>{'>'}</button>
        <button onClick={() => changeMonth(12)}>{'>>'}</button>
      </div>
      <div className="calendar-grid">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
          <div key={d} className="calendar-day header">{d}</div>
        ))}
        {getMonthDays()}
      </div>

      <div className="calendar-legend">
        <div><span className="dot taken-dot"></span> Medication taken</div>
        <div><span className="dot missed-dot"></span> Missed medication</div>
        <div><span className="dot today-dot"></span> Today</div>
      </div>
    </div>
  );
};

export default CalendarComponent;
