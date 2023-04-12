const mongoose = require("mongoose");

const userSechma = new mongoose.Schema({
  name: {
    type: String,
    // require: true,
    trim: true,
  },
  email: {
    type: String,
    // require: true,
    trim: true,
  },
  password: {
    type: String,
    // require: true,
    trim: true,
  },
  tc: {
    type: Boolean,
    // require: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const UserModel = mongoose.model("user", userSechma);
module.exports = UserModel;
