
const express = require('express');
const app = express();
const pool = require('./db');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Example API route
app.get('/api/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });


app.listen(3000, () => console.log('Server running on http://localhost:3000'));
