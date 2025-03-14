const express = require('express');
const User = require('./models/User');
const sequelize = require('./db');

const app = express();
const port = 3000;


app.use(express.json());


app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
