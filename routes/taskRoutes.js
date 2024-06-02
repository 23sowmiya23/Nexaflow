const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// @route   GET api/tasks
// @desc    Get all tasks
// @access  Public
router.get('/', taskController.getTasks);

// @route   POST api/tasks
// @desc    Create a new task
// @access  Public
router.post('/', taskController.createTask);

// @route   PUT api/tasks/:id
// @desc    Update a task by ID
// @access  Public
router.put('/:id', taskController.updateTask);

// @route   DELETE api/tasks/:id
// @desc    Delete a task by ID
// @access  Public
router.delete('/:id', taskController.deleteTask);

module.exports = router;
