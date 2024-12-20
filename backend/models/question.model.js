const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    question_text: {
        type: String,
        required: true
    },
    question_type: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Question', questionSchema);