const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course', 
        required: true
    },
    enrolled_at: {
        type: Date,
        default: Date.now
    },
    completed_at: {
        type: Date
    },
    last_accessed_at: {
        type: Date,
        default: Date.now
    },
    progress_percentage: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);