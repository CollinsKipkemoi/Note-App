const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utilities");
const { addNote } = require("../controllers/note.controller");

router.post("/add-note", authenticateToken, addNote);

module.exports = router;
