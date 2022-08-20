const Notes = require("../models/noteModel");

const noteCtrl = {
  getNotes: async (req, res) => {
    try {
      //   console.log({ id: req.user.id });
      const notes = await Notes.find({ user_id: req.user.id });
      res.json(notes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createNote: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      const newNote = new Notes({
        title,
        content,
        date,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newNote.save();
      res.json({ msg: "Note created successfully " });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
      await Notes.findOneAndDelete({ _id: req.params.id });
      res.json({ msg: `Deleted note successfully` });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateNote: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      const notes = await Notes.findOneAndUpdate(
        { _id: req.params.id },
        { title, content, date }
      );
      res.json({ msg: "Updated successfully" }, { notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getNote: async (req, res) => {
    try {
      const note = await Notes.findById({ _id: req.params.id });
      res.json(note);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = noteCtrl;
