const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    started_at: {
        type: Date,
        default: Date.now
    },
    completed_at: {
        type: Date
    },
    score: {
        type: Number
    },
    attempt_number: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);