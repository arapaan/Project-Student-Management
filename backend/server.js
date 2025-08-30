const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json()); // supaya bisa baca req.body

app.use('/api/students', studentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
