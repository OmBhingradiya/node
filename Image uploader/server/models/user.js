const mongoose = require("mongoose");

const userSechma = new mongoose.Schema({
  image: {
    // data: Buffer,
    // contentType: String,
    type: String,
  },
});

const UserModel = mongoose.model("user", userSechma);
module.exports = UserModel;
