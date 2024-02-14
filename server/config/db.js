const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
module.exports = connectDB;
