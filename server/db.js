// server/db.js
const { Pool } = require('pg');

// Create a pool of connections to PostgreSQL
const pool = new Pool({
  user: 'postgres',     // replace with your PG username
  host: 'localhost',            // since PG is local
  database: 'my_app_db',     // replace with your database name
  password: 'blackfrog9', // replace with your password
  port: 5432,                   // default PG port
});

// Optional: test the connection immediately
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('PostgreSQL connection error:', err);
  } else {
    console.log('PostgreSQL connected! Time:', res.rows[0].now);
  }
});

module.exports = pool;
