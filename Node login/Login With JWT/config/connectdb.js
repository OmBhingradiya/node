const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error();
    mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
      // user: process.env.DB_USER,
      // pass: process.env.DB_PASS,
    });
    console.log("Conneted database");
  } catch (err) {
    console.log(err);
    // process.exit(1);
  }
};
module.exports = connectDB;
