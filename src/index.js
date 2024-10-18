//  
//  Victor Ulloa
//  200597860
//  index.js
//  2024-10-18
//

const express = require('express');
const songRoutes = require('./routes/songRoutes');
const connectToDatabase = require('./config/database'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Connect to the database
connectToDatabase();

// Use routes
app.use('/songs', songRoutes);

// Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve the index.html file
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});