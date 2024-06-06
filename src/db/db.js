require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  let uri;
  uri = process.env.DB_Uri;
  uri = uri.replace("<username>", process.env.DB_User);
  uri = uri.replace("<password>", process.env.DB_Pass);

  console.log("Connecting to db...");
  await mongoose.connect(uri, { dbName: process.env.DB_Name });
  console.log("DB connection successfull...");
};

module.exports = connectDB;
