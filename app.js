require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const clientRoute = require("./routes/clientRoute");
const blogRoute = require("./routes/blogRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", clientRoute);
app.use("/blogs", blogRoute);

app.get("/users", (req, res) => {
  res.json("Testing now...");
});

const URI = process.env.DB_URL;

mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Database Connected...");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Backend Server running on port", PORT);
});
