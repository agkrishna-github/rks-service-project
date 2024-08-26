const express = require("express");
const {
  addDriverDetailsController,
  getDriverDetailsController,
} = require("../controllers/driverDetailscontroller");
const router = express.Router();

router.post("/add-Driver-Details", addDriverDetailsController);
router.get("/get-Drivers-Details", getDriverDetailsController);

module.exports = router;
