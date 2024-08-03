const Note = require("../models/note.model");

// !ADD NOTE
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

// !EDIT NOTE
const editNote = async (req, res) => {
  const { noteId } = req.params;
  const { title, content, tags, isPinned } = req.body;
  const { user } = req.user;
  if (!title && !content && !tags) {
    return res.status(400).json({
      error: true,
      message: "No changes made!",
    });
  }


  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note) {
      return res.status(404).json({
        error: true,
        message: "Note not found!",
      });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;

    await note.save();
    return res.status(200).json({
      error: false,
      message: "Note edited succesfully!",
      note,
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};
module.exports = {
  addNote,
  editNote,
};
