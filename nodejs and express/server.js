const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! John Jecu N.Cutanda!!' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
