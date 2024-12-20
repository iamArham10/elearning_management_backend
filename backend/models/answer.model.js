const mongoose = require('mongoose');
const { QuestionType } = require('./constants/enums');


const answerSchema = new mongoose.Schema({
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    answer_text: {
        type: String,
        required: true,
        trim: true
    },
    is_correct: {
        type: Boolean,
        required: function () {
            return this.question_type === QuestionType.MULTIPLE_CHOICE ||
                this.question_type === QuestionType.TRUE_FALSE
        },
        default: false
    },
    feedback: {
        type: String,
        required: function () {
            return this.question_type === QuestionType.MULTIPLE_CHOICE ||
                this.question_type === QuestionType.TRUE_FALSE
        },
        trim: true
    }
}, {
    timestamps: true
});

answerSchema.pre('save', async function (next) {

    // ensure the question exists
    const question = await mongoose.model('Question').findById(this.question_id);
    if (!question) {
        return next(new Error('Question not found'));
    }

    // validate multiple choice
    if (question.question_type === QuestionType.MULTIPLE_CHOICE) {
        if (this.is_correct) {
            const correctAnswers = await this.constructor.countDocuments({
                question_id: this.question_id,
                is_correct: true,
                _id: { $ne: this._id }
            });
            if (correctAnswers > 0) {
                return next(new Error('Multiple choice questions can only have one correct answer'));
            }
        }
    }

    // counts the answers for the question
    if (question.question_type === QuestionType.TRUE_FALSE) {
        const totalAnswers = await this.constructor.countDocuments({
            question_id: this.question_id,
            _id: { $ne: this._id }
        });
        if (totalAnswers >= 2) {
            return next(new Error('True/False questions can only have two answers'));
        }
    }

    next();
});

module.exports = mongoose.model('Answer', answerSchema);