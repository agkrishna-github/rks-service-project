require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const vehicleDetailsRoute = require("./routes/vehicleDetailsRoute");
const driverDetailsRoute = require("./routes/driverDetailsRoute");
const bodyParser = require("body-parser");

connectDB();
app.use(
  cors({
    origin: ["https://rks-service-project-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/vehicle", vehicleDetailsRoute);
app.use("/api/v1/driver", driverDetailsRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  throw new Error("err", err);
});
