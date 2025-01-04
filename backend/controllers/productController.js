const db = require('../config/db');

const getProducts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const createProduct = async (req, res) => {
  const { name, category, stock_level } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO products (name, category, stock_level) VALUES ($1, $2, $3) RETURNING *',
      [name, category, stock_level]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

module.exports = { getProducts, createProduct };
