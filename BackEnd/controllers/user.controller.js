const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// ?REGISTER USER CONTROLLER
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      error: true,
      message: !username
        ? "Username is required!"
        : !email
        ? "Email is required!"
        : "Password is required!",
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

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message:
        !email && !password
          ? "Email and password are required!"
          : !email
          ? "Email is required!"
          : "Password is required!",
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
    const time = new Date();
    console.log(`${user.username} logged in at: ${time}`);

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

// ?Get user
const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found!",
      });
    }
    return res.status(200).json({
      error: false,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Server error!",
    });
  }
};


// ?Get all users
const getAllUsers = async (req, res) => {
  const users = await User.find();
  if(!users) return res.status(404).json({error: true, message: "No users found!"});
  return res.status(200).json({error: false, users});
}


module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAllUsers
};
