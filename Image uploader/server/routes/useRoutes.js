const upload = require("../controllers/image/imageUpload");
const router = require("express").Router();
const UserModel = require("../models/user.js");

//Public Routes

router.post("/upload", upload.single("image"), (req, res) => {
  const newImage = new UserModel({
    image: {
      data: req.file.filename,
      contentType: "image/png",
    },
  });
  newImage
    .save()
    .then(() => res.send("succ uploaded"))
    .catch((err) => console.log(err));
});

//Protected Routes

module.exports = router;
