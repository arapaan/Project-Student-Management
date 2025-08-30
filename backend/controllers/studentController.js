const db = require('../db');

exports.createStudent = (req, res) => {
  const { name, nis, class: kelas, gender, birthDate } = req.body;

  if (!name || !nis || !kelas || !gender || !birthDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO students (name, nis, class, gender, birthDate) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, nis, kelas, gender, birthDate], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });

    res.status(201).json({
      message: "Student added successfully",
      studentId: result.insertId
    });
  });
};


exports.getStudents = (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message});
        }
        res.status(200).json(result);
    });
};