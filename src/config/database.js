//  
//  Victor Ulloa
//  200597860
//  database.js
//  2024-10-18
//

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = "mongodb+srv://victor_ulloa:eLP3z9n3ckaiDrZf@cluster0.can4c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log('MongoDB URI:', uri);
let client;

async function connectToDatabase() {
  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    return client
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

module.exports = connectToDatabase;
