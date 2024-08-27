const express = require("express");
const {
  addDeliveryVehicleDetailsController,
} = require("../controllers/deliveryVehicleController");
/* const {
  addDriverDetailsController,
  getDriverDetailsController,
} = require("../controllers/driverDetailscontroller"); */
const router = express.Router();

router.post(
  "/add-deliveryVehicle-Details",
  addDeliveryVehicleDetailsController
);

module.exports = router;
