const mongoose = require('mongoose');
const { DifficultyLevel, DefaultMaterial } = require('./constants/enums');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    difficulty_level: {
        type: String,
        enum: Object.values(DifficultyLevel),
        required: true,
    },
    thumbnail_url: {
        type: String,
        default: DefaultMaterial.COURSE_THUMBNAIL,
    },
    syllabus: {
        type: String,
        required: true,
    },
    price: { 
        type: Number,
        required: true,
    },
    created_at: {
        type: Date, 
        default: Date.now
    },
    updated_at: {
        type: Date, 
        default: Date.now
    },
    is_published: {
        type: Boolean,
        default: false,
    },
    enrollment_limit: {
        type: Number,
        required: true,
    },
    prerequisites: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Course'
    }]
});

module.exports = mongoose.model('Course', courseSchema);