const mongoose = require("mongoose");

const deliveryVehiclesSchema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },

    images: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DeliveryVehicle", deliveryVehiclesSchema);
