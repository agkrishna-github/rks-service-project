const fs = require("fs");
const asyncHandler = require("express-async-handler");
const {
  cloudinaryUploadImg,
  //   cloudinaryDeleteImg,
} = require("../utils/cloudinary");

const uploadImagesCtrl = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      urls.push(newpath);
    }
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});
/* 
const deleteImageFromDropCtrl = asyncHandler(async (req, res) => {
  const { imgId } = req.params;

  try {
    const deleted = cloudinaryDeleteImg(imgId, "images");
    res.json({ imgId, message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
}); */

module.exports = { uploadImagesCtrl };
// module.exports = { uploadImagesCtrl, deleteImageFromDropCtrl };
