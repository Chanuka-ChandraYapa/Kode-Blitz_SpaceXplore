const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const travellerclassRoutes = require("./routes/travellerclassRoutes");
const spaceshipsRoutes = require("./routes/spaceshipRoutes");
const seatsRoute = require("./routes/seatsRoutes");
const planetsRoute = require("./routes/planetRoutes");
const passengerRoutes = require("./routes/passengerRoutes");
const flightscheduleRoutes = require("./routes/flight_scheduleRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", passengerRoutes);
app.use("/", flightscheduleRoutes);
app.use("/", planetsRoute);
app.use("/", seatsRoute);
app.use("/", spaceshipsRoutes);
app.use("/", travellerclassRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 3000");
  });
});
