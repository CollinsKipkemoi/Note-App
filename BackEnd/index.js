require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("./config.json");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

// !ROUTERS
const userRouter = require("./routes/user.routes");
const noteRouter = require("./routes/note.routes");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow all origins
  })
);

// !App using the routes
app.use("/", userRouter);
app.use("/", noteRouter);



// !Starting server and connecting to dB
const PORT = process.env.PORT || 8000;
console.log("Attempting to connect to the database...");

mongoose
  .connect(config.connectionString)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });
