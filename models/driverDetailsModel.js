const mongoose = require("mongoose");

const driverDetailsSchema = new mongoose.Schema(
  {
    driverName: {
      type: String,
      required: true,
    },
    driverId: {
      type: String,
      required: true,
    },
    driverPhone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverDetailsSchema);
