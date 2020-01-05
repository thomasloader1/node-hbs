const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    /*     inProgress: { type: Boolean, required: true },
        section: { type: String, required: true },
        dateTask: { type: Date, required: true }, */
    date: { type: Date, default: Date.now },
    user: { type: String }
});

module.exports = mongoose.model('Note', NoteSchema);