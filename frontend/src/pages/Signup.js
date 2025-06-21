import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../api/auth';
import './Signup.css'; // Add this line for styling

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    role: 'patient',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      if (res.data.message) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Register</h2>
        <form onSubmit={handleSignup}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
          <select name="role" className = "select" onChange={handleChange}>
            <option value="patient" className = "patient">Patient</option>
            <option value="caretaker" className ="caretaker">Caretaker</option>
          </select>
          <button type="submit">Register</button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
}
