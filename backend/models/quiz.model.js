const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time_limit: {
        type: Number,
        default: -1
    },
    passing_score: {
        type: Number, required: true
    },
    max_attempts: {
        type: Number,
        default: -1
    }
});

module.exports = mongoose.model('Quiz', quizSchema);