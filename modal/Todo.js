const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const TodoModal = mongoose.model("todos", TodoSchema);

module.exports = TodoModal;