const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    answer_text: {
        type: String, 
        required: true
    },
    is_correct: {
        type: Boolean,
    }
});