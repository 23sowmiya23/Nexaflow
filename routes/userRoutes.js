const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', UserController.getUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public
router.get('/:id', UserController.getUserById);

// @route   PUT /api/users/:id
// @desc    Update user by ID
// @access  Public
router.put('/:id', UserController.updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete user by ID
// @access  Public
router.delete('/:id', UserController.deleteUser);

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', UserController.registerUser);

module.exports = router;
