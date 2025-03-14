const express = require('express');
const app = express();

// Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
