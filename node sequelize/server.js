const express = require('express');
const User = require('./models/User');
const sequelize = require('./db');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
