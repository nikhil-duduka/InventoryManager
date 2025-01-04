const express = require('express');
const { getSuppliers, createSupplier } = require('../controllers/supplierController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Routes for suppliers
router.get('/', authMiddleware, getSuppliers); // All authenticated users can view suppliers
router.post('/', authMiddleware, roleMiddleware(['Admin']), createSupplier); // Only Admin can create a supplier

module.exports = router;
