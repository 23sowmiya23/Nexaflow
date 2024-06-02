import axios from 'axios';

const BASE_URL = '/api/tasks'; // Base URL for task endpoints

// Function to fetch all tasks from the backend
export const getAllTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Function to create a new task
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(BASE_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Other CRUD operations for tasks can be added similarly
