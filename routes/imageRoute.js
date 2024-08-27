const express = require("express");
const router = express.Router();
const { uploadImagesTomul } = require("../middlewares/uploadImage");
const {
  uploadImagesCtrl,
  //   deleteImageFromDropCtrl,
} = require("../controllers/imgUploadController");

router.post("/", uploadImagesTomul.array("images", 10), uploadImagesCtrl);
// router.delete("/deleteImage/:imgId", deleteImageFromDropCtrl);
module.exports = router;
