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

// !GET ALL THE NOTES
const getAllNotes = async (req, res) => {
  const { user } = req.user;
  // console.log(user);
  try {
    const notes = await Note.find({ userId: user._id }).sort({ isPinned: -1 });
    return res.status(200).json({
      error: false,
      notes,
      message: "All notes retrieved successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

// !DELETE NOTE
const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  try {
    const deleted = await Note.findByIdAndDelete(noteId);
    console.log(`Deleted the following note\n: ${deleted}`);
    res.status(200).json({
      error: false,
      message: "Deleted note succesfully!",
      deleted,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message,
    });
  }
};

// !Pin Note
const updatePin = async (req, res) => {
  const { user } = req.user;
  const { noteId } = req.params;
  const { isPinned } = req.body;
  if (!user)
    return res.status(401).json({
      error: true,
      message: "Unauthorised!",
    });

  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note)
      return res.status(404).json({
        error: true,
        message: "Note not found!",
      });

    if (isPinned === note.isPinned) {
      return res.status(400).json({
        error: true,
        message: "No changes made!",
      });
    }
    note.isPinned = isPinned;
    await note.save();
    console.log(`Note pinned status updated successfully`);
    return res.status(200).json({
      error: false,
      message: "Note pinned status updated successfully!",
      note,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

//
const searchNote = async (req, res) => {
  const { user } = req.user;
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({
      error: true,
      message: "Query is required!",
    });
  }
  try {
    const notes = await Note.find({
      userId: user._id,
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { content: { $regex: new RegExp(query, "i") } },
        { tags: { $regex: new RegExp(query, "i") } },
      ],
    });
    if(notes.length === 0){
      return res.status(404).json({
        error: true,
        message: "No notes found!",
      });
    }
    return res.status(200).json({
      error: false,
      notes,
      message: "Notes retrieved successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

module.exports = {
  addNote,
  editNote,
  getAllNotes,
  deleteNote,
  updatePin,
  searchNote,
};
