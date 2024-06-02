const express = require('express');
const router = express.Router();

// Import and use the route handlers
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes'); // Assuming you have task routes

// Use the route handlers
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/tasks', taskRoutes); // Mount task routes under /tasks

module.exports = router;
