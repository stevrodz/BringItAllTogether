const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Get all users (protected)
router.get('/', authenticate, async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

module.exports = router;
