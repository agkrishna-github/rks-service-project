const deliveryVehicleDetails = require("../models/deliveryVehiclesModel");

const addDeliveryVehicleDetailsController = async (req, res) => {
  console.log("req body", req.body);
  try {
    const newDeliveryVehicle = await deliveryVehicleDetails.create(req.body);
    if (newDeliveryVehicle) {
      res.status(200).send({
        success: true,
        newDeliveryVehicle,
        message: "New Delivery Vehicle Details Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in add driver details",
      error,
    });
  }
};
/* 
const getDriverDetailsController = async (req, res) => {
  try {
    const driversDetails = await driverDetails.find({});
    if (driversDetails) {
      res.status(200).send({
        success: true,
        driversDetails,
        message: "Driver details list fetched Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in fetching Driver details",
      error,
    });
  }
}; */

module.exports = { addDeliveryVehicleDetailsController };
// module.exports = { addDriverDetailsController, getDriverDetailsController };
