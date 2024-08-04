const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../utilities");
const {
  addNote,
  editNote,
  getAllNotes,
} = require("../controllers/note.controller");

router.post("/add-note", authenticateToken, addNote);
router.put("/edit-note/:noteId", authenticateToken, editNote);
router.get("/all-notes", authenticateToken, getAllNotes);

module.exports = router;
