//  
//  Victor Ulloa
//  200597860
//  songRoutes.js
//  2024-10-18
//

const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Route to get all song
router.get('/', songController.getAllSongs);

// Route to get recipe by ID
router.get('/:id', songController.getSongById);

// Route to get recipe by ID
router.get('/artist/:name', songController.getSongByArtistName);

module.exports = router;