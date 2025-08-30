const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // username default XAMPP
  password: '160907',      // password MySQL kamu (kosong kalau default XAMPP)
  database: 'Manajemen_Siswa' // ganti sesuai nama DB kamu
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

module.exports = db;