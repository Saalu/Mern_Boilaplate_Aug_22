require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const empRoute = require("./routes/empRoute");

const app = express();
app.use(express.json());
app.use("/emp", empRoute);

const URI = process.env.PRACTICE_DB;

mongoose.connect(URI, () => {
  try {
    console.log("Database Connected...");
  } catch (err) {
    return err.message;
  }
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Server has started on port", PORT);
});
