const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    enrollment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: true
    },
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completed_date: {
        type: Date
    },
    time_spent: {
        type: Number,
        required: true
    },
    last_position: {
        type: Number
    }
})

module.exports = mongoose.model('Progress', progressSchema);