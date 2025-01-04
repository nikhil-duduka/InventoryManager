const db = require('../config/db');

const Product = {
  findAll: () => db.query('SELECT * FROM products'),
  create: (name, category, stock_level) =>
    db.query('INSERT INTO products (name, category, stock_level) VALUES ($1, $2, $3) RETURNING *', [
      name,
      category,
      stock_level,
    ]),
};

module.exports = Product;
