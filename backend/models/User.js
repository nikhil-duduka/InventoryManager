const db = require('../config/db');

const User = {
  // Fetch a user by email
  findByEmail: async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    return db.query(query, [email]);
  },

  // Fetch a user by ID
  findById: async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    return db.query(query, [id]);
  },

  // Create a new user
  create: async (name, email, password, role) => {
    const query = `
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    return db.query(query, [name, email, password, role]);
  },
};

module.exports = User;
