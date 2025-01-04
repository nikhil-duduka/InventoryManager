const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('@prisma/client').PrismaClient;

const app = express();
const PORT = 5001;
const prismaClient = new prisma();

// Load environment variables
require('dotenv').config();

dotenv.config();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);

app.get("/",(req,res) => {
    res.status(200).send("Server Check");
});

// Utility function to generate JWT
const generateToken = (userId, username) => {
  return jwt.sign({ userId, username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// POST /signup Route (Register User)
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await prismaClient.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user
  const user = await prismaClient.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  // Generate JWT token
  const token = generateToken(user.id, user.username);

  res.status(201).json({ token });
});

// POST /signin Route (Login User)
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await prismaClient.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  // Compare the provided password with the stored hash
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = generateToken(user.id, user.username);

  res.status(200).json({ token });
});

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ error: 'Access denied, no token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};

// GET /profile Route (Protected Route)
app.get('/profile', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  // Get the user data from the database
  const user = await prismaClient.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ username: user.username, email: user.email });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

