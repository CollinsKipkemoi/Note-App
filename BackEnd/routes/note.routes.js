const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utilities");
const { addNote, editNote } = require("../controllers/note.controller");

router.post("/add-note", authenticateToken, addNote);
router.put("/edit-note/:noteId", authenticateToken, editNote);

module.exports = router;
