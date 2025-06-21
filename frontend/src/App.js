import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PatientDashboard from './pages/PatientDashboard';
import CaretakerDashboard from './pages/CaretakerDashboard';

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/patient-dashboard" element = {<PatientDashboard/>}/>
        <Route path = "/caretaker-dashboard" element = {<CaretakerDashboard/>}/>

      </Routes>
      <nav>
        <Link to = "/signup"  name = ""signUp/>
      </nav>
    </Router>
  );
}

export default App;
