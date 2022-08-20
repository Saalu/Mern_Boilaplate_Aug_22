require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const noteRouter = require("./routes/noteRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

// =======Port Server is running on =========
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// ===========Database Connection===========
const DB = process.env.MONGODB_URL;
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);
