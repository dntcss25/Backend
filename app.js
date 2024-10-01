const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         
  password: '',         
  database: 'school_db'  
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define API Endpoints
// Get all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get all student info
app.get('/student-info', (req, res) => {
  db.query('SELECT * FROM student info', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get all instructors
app.get('/instructors', (req, res) => {
  db.query('SELECT * FROM instructors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});