const express = require('express');
const mysql = require('mysql');
const cors = require("cors")
require("dotenv").config()

const app = express();
const port = process.env.PORT;
app.use(cors({ origin: "https://pointernational.in" }))
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port : process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
});

app.post('/api/contact', (req, res) => {
  const { name, number, address, treatment,army } = req.body;
  console.log(req.body);
  
  
  const sql = 'INSERT INTO contact (name, number, address, treatment, army) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, number, address, treatment, army], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Failed to insert data.');
    }
    res.status(201).send('Data inserted successfully.');
  });
});

//   // GET API to Send Data to Frontend
app.get('/api/contact', (req, res) => {
  const sql = 'SELECT * FROM contact';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Failed to fetch data.');
    }

    const formattedResults = results.map(row => ({
      ...row,
      date: new Date(row.dateAndTime).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    }));

    res.status(200).json(formattedResults);
  });
});



// Start the Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});