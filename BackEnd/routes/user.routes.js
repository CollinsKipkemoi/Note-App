const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUser} = require("../controllers/user.controller");
router.use(express.json());

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/:userId", getUser);

module.exports = router;
