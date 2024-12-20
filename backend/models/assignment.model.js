const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
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
    due_date: {
        type: Date,
        required: true
    },
    max_score: {
        type: Number,
        required: true
    },
    submission_type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Assignment', assignmentSchema);