//  
//  Victor Ulloa
//  200597860
//  songModel.js
//  2024-10-18
//

const { MongoClient } = require('mongodb');
const connectToDatabase = require('../config/database');

let client;
async function getSongsCollection() {
  if (!client) {
    client = await connectToDatabase();
  }
  return client.db('midterm').collection('songs');
}

// Fetch all songs
async function getAllSongs() {
  const songsCollection = await getSongsCollection();
  return await songsCollection.find({}).toArray();
}

// Fetch song by ID
async function getSongById(id) {
  const songsCollection = await getSongsCollection();
  return await songsCollection.findOne({ songId: id });
}

// Fetch song by artist name
async function getSongByArtistName(name) {
  const songsCollection = await getSongsCollection();
  return await songsCollection.findOne({ "artistData.name": name });
}

module.exports = {
  getAllSongs,
  getSongById,
  getSongByArtistName
};