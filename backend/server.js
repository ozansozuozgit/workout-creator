const express = require('express');
const dotenv = require('dotenv');
const exercises = require('./data/exercises');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is Running');
});

app.get('/api/exercises', (req, res) => {
  res.json(exercises);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
