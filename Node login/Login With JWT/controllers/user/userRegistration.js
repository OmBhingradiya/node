const UserModel = require("../../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegistration = async (req, res) => {
  const { name, email, password, password_confrimation, tc } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (user) {
    res.send({ status: "failed", message: "Email already exists" });
  } else {
    if (name && email && password && password_confrimation && tc) {
      if (password === password_confrimation) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const doc = new UserModel({
            name: name,
            email: email,
            password: hashPassword,
            tc: tc,
          });
          await doc.save();
          const savedUser = await UserModel.findOne({ email: email });

          //Genertate JWT
          const token = jwt.sign(
            { userID: savedUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );
          res.status(201).send({
            status: "success",
            message: "You are now register!",
            token: token,
          });
        } catch (err) {
          console.log(err);
          res.send({
            status: "failed",
            message: "Unable to register",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "Paaword and confrim password not match",
        });
      }
    } else {
      console.log("nop Without login");
      res.send({ status: "failed", message: "All Field are required" });
    }
  }
};

module.exports = userRegistration;
