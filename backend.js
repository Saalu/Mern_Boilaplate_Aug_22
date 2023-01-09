require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const empRoute = require("./routes/empRoute");
const loginRoute = require("./routes/loginRoute");

const app = express();
app.use(express.json());
app.use("/api", empRoute);
app.use("/users", loginRoute);

const URI = process.env.PRACTICE_DB;

mongoose.connect(URI, () => {
  try {
    console.log(" Connected to Mongo...");
  } catch (err) {
    return err.message;
  }
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Server has started on port", PORT);
});
