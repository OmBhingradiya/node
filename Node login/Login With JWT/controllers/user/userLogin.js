const UserModel = require("../../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await UserModel.findOne({ email: email });
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && isMatch) {
          const token = jwt.sign({ userId: user }, process.env.JWT_SECRET_KEY, {
            expiresIn: "5d",
          });
          res.send({
            status: "failed",
            message: "Login Success",
            token: token,
          });
        } else {
          res.send({
            status: "failed",
            message: "Email or Password is not valid",
          });
        }
      } else {
        res.send({ status: "failed", message: "You are not a Registerd user" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = userLogin;
