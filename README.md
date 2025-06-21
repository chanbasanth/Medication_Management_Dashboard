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
REACT_APP_API_URL=http://localhost:5000
