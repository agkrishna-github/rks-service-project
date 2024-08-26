const VehicleDetails = require("../models/vehicleDetailsModel");

const addVehicleDetailsController = async (req, res) => {
  try {
    const newVehicleDetails = await VehicleDetails.create(req.body);
    if (newVehicleDetails) {
      res.status(200).send({
        success: true,
        newVehicleDetails,
        message: "New Vehicle Details Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in add vehicle details",
      error,
    });
  }
};

const getVehicleDetailsController = async (req, res) => {
  try {
    const vehiclesDetails = await VehicleDetails.find({});
    if (vehiclesDetails) {
      res.status(200).send({
        success: true,
        vehiclesDetails,
        message: "Vehicle details list fetched Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in fetching vehicle details",
      error,
    });
  }
};

const getSingleVehicleDetailsController = async (req, res) => {
  const { vid } = req.params;
  try {
    const singleVehiclesDetails = await VehicleDetails.findOne({ _id: vid });
    console.log({ singleVehiclesDetails });
    if (singleVehiclesDetails) {
      res.status(200).send({
        success: true,
        singleVehiclesDetails,
        message: "Single Vehicle details fetched Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in fetching single vehicle details",
      error,
    });
  }
};

module.exports = {
  addVehicleDetailsController,
  getVehicleDetailsController,
  getSingleVehicleDetailsController,
};
