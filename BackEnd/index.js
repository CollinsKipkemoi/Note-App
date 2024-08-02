require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("./config.json");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user.model");
const { authenticateToken } = require("./utilities");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow all origins
  })
);

// *Register api
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username) {
    return res.sendStatus(400).json({
      error: true,
      message: "username is required!",
    });
  }
  if (!email) {
    return res.status(400).send({
      error: true,
      message: "Email is required!",
    });
  }
  if (!password) {
    return res.status(400).send({
      error: true,
      message: "Password is required!",
    });
  }
  const isUser = await User.findOne({ email: email });
  if (isUser) {
    return res.status(400).send({
      error: true,
      message: "User already exists!",
    });
  }
  const newUser = new User({
    username,
    email,
    password,
  });
  await newUser.save();

  // ?Access token
  const accessToken = jwt.sign({ newUser }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "45m",
  });
  return res.json({
    error: false,
    newUser,
    accessToken,
    message: "User created successfully!",
  });
});

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
