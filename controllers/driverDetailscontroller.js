const driverDetails = require("../models/driverDetailsModel");

const addDriverDetailsController = async (req, res) => {
  try {
    const newDriverDetails = await driverDetails.create(req.body);
    if (newDriverDetails) {
      res.status(200).send({
        success: true,
        newDriverDetails,
        message: "New Driver Details Added Successfully",
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
};

module.exports = { addDriverDetailsController, getDriverDetailsController };
