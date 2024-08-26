const express = require("express");
const {
  addVehicleDetailsController,
  getVehicleDetailsController,
  getSingleVehicleDetailsController,
} = require("../controllers/vehicleDetailsController");
const router = express.Router();

router.post("/add-Vehicle-Details", addVehicleDetailsController);
router.get("/get-Vehicle-Details", getVehicleDetailsController);
router.get(
  "/get-singleVehicle-Details/:vid",
  getSingleVehicleDetailsController
);

module.exports = router;
