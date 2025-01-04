const db = require('../config/db');

const getSuppliers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM suppliers');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching suppliers' });
  }
};

const createSupplier = async (req, res) => {
  const { name, contact_info } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO suppliers (name, contact_info) VALUES ($1, $2) RETURNING *',
      [name, contact_info]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating supplier' });
  }
};

module.exports = { getSuppliers, createSupplier };
