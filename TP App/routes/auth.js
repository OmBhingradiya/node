const express = require("express");
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //GERNERAT NEW PASS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log("SWSWSwdsws");

    //save user and return respond
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get data

router.get("/data", async (req, res) => {
  const user = await User.find({});

  // const payload = req.body;
  res.send(user);
});

//LOGIN

router.post("/login", async (req, res) => {
  const payload = req.body;
  const user = await User.findOne({ email: payload.email });
  !user && res.status(404).json({ msg: "User not found" });

  // await employee.findOne({ req.body.email }).then(async (user) => {
  // if (!employee) return res.status(400).json({ msg: "User not exist" });

  const validPassword = await bcrypt.compare(payload.password, user.password);

  if (validPassword) {
    return res.status(200).json({ msg: "Login success" });
  } else {
    return res.status(401).json({ msg: "Invalid credencial" });
  }
});

module.exports = router;
