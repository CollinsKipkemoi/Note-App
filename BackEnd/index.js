require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("./config.json");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user.model");
const Note = require("./models/note.model");
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
// *login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(400).json({
      error: true,
      message: "Email and password are required!",
    });
  }
  if (!email) {
    return res.status(400).json({
      error: true,
      message: "Email is required!",
    });
  }

  if (!password) {
    return res.status(400).json({
      error: true,
      message: "Password is required!",
    });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      error: true,
      message: "User not found!",
    });
  }
  if (user.email === email && user.password === password) {
    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return res.json({
      error: false,
      message: "Login succesful!",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Invalid credentials!",
    });
  }
});
// *Add note
app.post("/add-note", authenticateToken, async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;

  try {
    if (!title || !content) {
      return res.status(400).json({
        error: true,
        message: "Title and content are required!",
      });
    }
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: user._id,
    });
    await note.save();
    res.status(201).json({
      error: false,
      message: "Note added succesfully!",
      note,
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Error adding note!",
    });
  }
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
