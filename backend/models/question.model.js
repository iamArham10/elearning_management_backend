const mongoose = require('mongoose');
const { QuestionType } = require('./constants/enums');

const questionSchema = new mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    question_text: {
        type: String,
        required: true,
        trim: true
    },
    question_type: {
        type: String,
        enum: Object.values(QuestionType),
        required: true
    },
    points: {
        type: Number,
        required: true,
        min: 0
    },
    order: {
        type: Number,
        required: true,
        min: 1
    },

    // mcq and true false don't require answer key because the choices themselves provide the validation
    answer_key: {
        type: String,
        required: function() {
            return this.question_type == QuestionType.SHORT_ANSWER ||
                   this.question_type === QuestionType.ESSAY;
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);