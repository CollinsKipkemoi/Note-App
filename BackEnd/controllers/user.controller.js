const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// ?REGISTER USER CONTROLLER
const registerUser = async (req, res) => {
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
};

// ?LOGIN USER CONTROLLER
const loginUser = async (req, res) => {
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
};
module.exports = {
  registerUser, 
  loginUser
};
