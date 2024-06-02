const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('../backend/config/passport')(passport);

// Routes
const productRoutes = require('../backend/routes/productRoutes');
const userRoutes = require('../backend/routes/auth');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// MongoDB ConnectionMonesh
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://Monesh_22:podapull22@monesh.8aatlyo.mongodb.net/?retryWrites=true&w=majority&appName=Monesh';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
