const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log({ __dirname });
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    console.log({ file });
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const uploadImagesTomul = multer({
  storage: storage,
});

module.exports = { uploadImagesTomul };
