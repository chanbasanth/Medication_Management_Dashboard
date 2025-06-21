import { useState, useRef } from 'react';
import CalendarComponent from './CalendarComponent';
import './MedicationTracker.css';

const MedicationTracker = ({ onMarkTaken }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [takenDates, setTakenDates] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef();

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const markAsTaken = () => {
    const key = selectedDate.toDateString();
    setTakenDates(prev => ({ ...prev, [key]: true }));
    onMarkTaken(selectedDate);
    setUploadedFile(null);
  };

  const isToday = selectedDate.toDateString() === today.toDateString();
  const isTaken = takenDates[selectedDate.toDateString()];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setUploadedFile(imageURL);
    }
  };

  const handleFileClick = () => {
    console.log("File input:", fileInputRef.current); // Debug
    fileInputRef.current?.click();
  };

  return (
    <div className="tracker-container">
      <div className="medication-section">
        <h2 className="medication-title">📅 Today's Medication for {selectedDate.toDateString()}</h2>

        {isTaken ? (
          <div className="success-box">
            <div className="check-icon">✅</div>
            <h3>Medication Completed!</h3>
            <p>Great job! You've taken your medication for {selectedDate.toDateString()}.</p>
            <div className="medication-item success">
              <div className="medication-step">✅</div>
              <div className="medication-details">
                <p className="medication-label">Daily Medication Set</p>
                <p className="medication-desc">Complete set of daily tablets</p>
              </div>
              <div className="medication-time">🕗 8:00 AM</div>
            </div>
          </div>
        ) : (
          <>
            <div className="medication-item">
              <div className="medication-step">1</div>
              <div className="medication-details">
                <p className="medication-label">Daily Medication Set</p>
                <p className="medication-desc">Complete set of daily tablets</p>
              </div>
              <div className="medication-time">🕗 8:00 AM</div>
            </div>

            <div className="proof-photo-card">
              <div className="proof-icon">🖼️</div>
              <h4>Add Proof Photo (Optional)</h4>
              <p>Take a photo of your medication or pill organizer as confirmation</p>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                // Better hidden technique
                style={{ opacity: 0, width: 0, height: 0, position: 'absolute', left: '-9999px' }}
              />

              <button className="photo-btn" onClick={handleFileClick}>
                {uploadedFile ? "🖼️ Change File" : "📷 Take Photo"}
              </button>

              {uploadedFile && (
                <div className="image-preview" style={{ marginTop: '12px' }}>
                  <img
                    src={uploadedFile}
                    alt="Proof"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
                    }}
                  />
                </div>
              )}
            </div>

            <button
              className={`mark-btn ${(isToday && !isTaken) ? 'active' : 'disabled'}`}
              onClick={markAsTaken}
              disabled={!isToday || isTaken}
            >
              {isToday ? '✔️ Mark as Taken' : '✔️ Cannot mark past or future dates'}
            </button>
          </>
        )}
      </div>

      <CalendarComponent
        currentDate={currentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        takenDates={takenDates}
        changeMonth={changeMonth}
      />
    </div>
  );
};

export default MedicationTracker;
