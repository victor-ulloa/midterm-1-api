
//  
//  Victor Ulloa
//  200597860
//  songController.js
//  2024-9-27
//

const songModel = require('../models/songModel');

// Controller to get all songs
async function getAllSongs(req, res) {
  try {
    const song = await songModel.getAllSongs();
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs', error: error.message });
  }
}

// Controller to get a song by ID
async function getSongById(req, res) {
  try {
    const songId = parseInt(req.params.id); // Convert the ID from string to integer
    const recipe = await songModel.getSongById(songId);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Song not found' });
    }
  } catch (error) {
    console.error('Error fetching song:', error);
    res.status(500).json({ message: 'Error fetching song' });
  }
}

// Controller to get a song by artist name
async function getSongByArtistName(req, res) {
  try {
    const artistName = req.params.name; 
    const recipe = await songModel.getSongByArtistName(artistName);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Song not found' });
    }
  } catch (error) {
    console.error('Error fetching song:', error);
    res.status(500).json({ message: 'Error fetching song' });
  }
}

module.exports = {
  getAllSongs,
  getSongById,
  getSongByArtistName
};