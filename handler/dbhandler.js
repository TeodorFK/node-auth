const mongoose = require('mongoose');

async function connectToDatabase(uri, dbName) {
  try {
    const result = await mongoose.connect(uri, { dbName });
    if (result) {
      console.log(`connected to ${result.connection.name}`);
    }
  } catch (error) {
    console.log(`dbhandler.js:connectToDatabase ->${error}`);
  }
}

module.exports = {
  connectToDatabase,
};