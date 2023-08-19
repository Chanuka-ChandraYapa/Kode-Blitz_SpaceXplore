const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const passengerRoute = require("./routes/Passenger");
const spaceshipRoute = require("./routes/Spaceship");
const travelclassRoute = require("./routes/TravelClass");
const seatsRoute = require("./routes/Seats");

app.use("/", passengerRoute);
app.use("/", spaceshipRoute);
app.use("/", travelclassRoute);
app.use("/", seatsRoute);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 3000");
  });
});
