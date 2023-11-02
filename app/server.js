const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongodb:27017/placesDB')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.send('App running on Docker!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
