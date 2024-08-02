const Note = require("../models/note.model");

const addNote = async (req, res) => {
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
};

module.exports = {
  addNote,
};
