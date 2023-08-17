const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const userRoute = require("./routes/user");
const commentRoute = require("./routes/comments");
const postRoute = require("./routes/Post");
const passengerRoute = require("./routes/Passenger");

app.use("/user", userRoute);
app.use("/comments", commentRoute);
//app.use("/posts", postRoute);
app.use("/", passengerRoute);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 3000");
  });
});
