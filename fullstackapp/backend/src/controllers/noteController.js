const Note = require('../models/note');

// Create note
exports.createNote = async (req, res) => {
    const note = new Note({
        text: req.body.text,
    });
    await note.save();
    res.json(note);
};

// Get all notes
exports.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

// Delete note
exports.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
};