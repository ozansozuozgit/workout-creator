const express = require('express');
const exercises = require('./data/exercises');

const app = express();

app.get('/', (req, res) => {
  res.send('API is Running');
});

app.get('/api/exercises', (req, res) => {
  res.json(exercises);
});

app.listen(5000, console.log('Server running on port 5000'));
