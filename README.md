# Medication_Management_Dashboard
Medication Management System: is a full-stack Medication Management application designed to support both patients and caretakers with role-based dashboards, medication tracking, and user authentication. Built with React, Node.js, and SQLite, the app provides core functionalities such as user signup/login, CRUD operations for medications, marking doses as taken, adherence tracking, and a clean calendar-based UI. It also includes optional features like file uploads for medication proof and notification settings (UI-ready). The current version uses local state for frontend logic and a SQLite backend for authentication and data persistence. This project demonstrates strong attention to clean architecture, reusable components, and user-centric UX design, and has been deployed for UI demo on Vercel.

medication_management/
├── backend/     # Node.js + SQLite (for auth and API)
└── frontend/    # React frontend (dashboard, UI)


🚀 Start the Backend
Open a terminal.

=> Navigate to the backend folder:
cd backend
npm install
Start the server:
node server.js
📝 The backend will typically run on http://localhost:5000


🌐 Start the Frontend
Open a second terminal.
Navigate to the frontend folder:
cd frontend
npm install
REACT_APP_API_URL=http://lo:

** Features **
=> Authentication
User Sign Up / Login using email and password

Secure authentication with backend validation

Error handling for invalid credentials

=> Medication Management
Add, update, and delete medications

Schedule medications with timing and frequency

Mark medications as "Taken" or "Missed"

=> Calendar View
Visual representation of medication history

Highlights taken/missed status by date

Easily track daily medication performance

=> Notifications (Optional or Planned)
In-app reminders for upcoming medications

Email notifications (can be added in the future)

=> Proof Upload (Optional / Planned)
Upload images as proof of taking medication

=> Responsive UI
Clean and intuitive user interface using React and Tailwind CSS

Fully responsive for mobile and desktop

=> Backend API (Node.js + Express + SQLite3)
RESTful API endpoints for users and medications

Connected to a lightweight SQLite database

Hosted on Render (or another cloud platform)

☁=> Deployed
Frontend on Vercel: [ https://medication-management-dashboard-bkp.vercel.app]

Backend on Render: [https://vercel.com/chanbasanths-projects/medication-management-dashboard-fd7m]


