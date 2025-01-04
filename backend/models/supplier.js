const db = require('../config/db');

const Supplier = {
  // Fetch all suppliers
  findAll: async () => {
    const query = 'SELECT * FROM suppliers';
    return db.query(query);
  },

  // Create a new supplier
  create: async (name, contact_info) => {
    const query = `
      INSERT INTO suppliers (name, contact_info)
      VALUES ($1, $2)
      RETURNING *;
    `;
    return db.query(query, [name, contact_info]);
  },
};

module.exports = Supplier;
