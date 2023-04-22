const mongoose = require("mongoose");

const connectDB = async (dbUrl) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbUrl);
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
    console.log("Can't connect to the database");
  }
};

module.exports = connectDB;
