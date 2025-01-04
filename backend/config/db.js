require('dotenv').config(); // Ensure environment variables are loaded before using them

const { Pool } = require('pg');

// Create a pool using the PostgreSQL connection string from environment variable
const pool = new Pool({
  connectionString: process.env.URI,
  ssl: {
    rejectUnauthorized: false, // This can be adjusted based on your SSL requirements
  },
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err, client) => {
  console.error('Error with database connection', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
