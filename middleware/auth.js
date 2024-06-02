const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', register);

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post('/login', login);

// @route   GET api/users
// @desc    Get user data
// @access  Private
router.get('/', authMiddleware, getUser);

module.exports = router;
