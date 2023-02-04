const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const dotenv = require('dotenv');
dotenv.config();

// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(upload.array());
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);

// Connecting to the database
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("Successfully Connected to mongodb");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now ...", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to the application Created with Node, Express and MongoDB",
  });
});

require("./routes/waitlist.routes")(app);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});