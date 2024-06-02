import axios from 'axios';

const BASE_URL = '/api/users'; // Base URL for user endpoints

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Function to login a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Function to get user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Function to update user profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Function to delete user profile
export const deleteUserProfile = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user profile:', error);
    throw error;
  }
};

// Other user-related functionality can be added similarly
