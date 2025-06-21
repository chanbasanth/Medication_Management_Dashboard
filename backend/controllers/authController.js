// backend/controllers/authController.js
const db = require('../db');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const { name, email, username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (name, email, username, password, role) VALUES (?, ?, ?, ?, ?)`,
    [name, email, username, hashedPassword, role],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(400).json({ message: 'Username already exists or invalid input' });
      }
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: this.lastID,
          name,
          role
        }
      });
      
    }
  );
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', user: { id: user.id, name: user.name, role: user.role } });
  });
};
