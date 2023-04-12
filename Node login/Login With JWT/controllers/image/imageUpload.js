const multer = require("multer");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  fileName: (req, file, cb) => {
    cb(null, Date.now() + ".png");
  },
});
const upload = multer({ storage: fileStorage });

module.exports = upload;

//  module.exports = ImageModel = mogoose.model("imageModel", ImageSchema);
