const db = require('../db');

// Add medication
exports.addMedication = (req, res) => {
  const { userId, name, dosage, frequency } = req.body;
  db.run(
    `INSERT INTO medications (userId, name, dosage, frequency) VALUES (?, ?, ?, ?)`,
    [userId, name, dosage, frequency],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Medication added', medicationId: this.lastID });
    }
  );
};

// Get all medications for a user
exports.getMedications = (req, res) => {
  const userId = req.params.userId;
  db.all(`SELECT * FROM medications WHERE userId = ?`, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Mark a medication as taken
exports.markAsTaken = (req, res) => {
  const id = req.params.id;
  const today = new Date().toISOString();
  db.run(
    `UPDATE medications SET takenToday = 1, dateTaken = ? WHERE id = ?`,
    [today, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Marked as taken' });
    }
  );
};
