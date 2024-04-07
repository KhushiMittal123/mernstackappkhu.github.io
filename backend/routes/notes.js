const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Create a note
router.post('/', async (req, res) => {
    try {
        const note = new Note({
            text: req.body.text
        });
        await note.save();
        res.json(note);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
