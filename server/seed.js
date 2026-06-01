// server/seed.js
const pool = require('./db'); // your working PostgreSQL connection

async function seed() {
  try {
    // Insert test users
    await pool.query(`
      INSERT INTO users (name, email, password)
      VALUES
      ('Gino', 'gino@example.com', 'hashedpassword123'),
      ('Alice', 'alice@example.com', 'password1'),
      ('Bob', 'bob@example.com', 'password2'),
      ('mick', 'mick@example.com', 'password3')

      ON CONFLICT (email) DO NOTHING;  -- avoids duplicates
    `);

    console.log('Seed complete!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    pool.end(); // close the connection
  }
}

seed();
