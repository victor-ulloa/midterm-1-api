
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



module.exports = {
    getAllSongs,
};