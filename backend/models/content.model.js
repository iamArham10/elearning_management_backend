const mongoose = require('mongoose');
const { ContentType } = require('./constants/enums');

const contentSchema = new mongoose.Schema({
    module_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Module',
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
    content_type: {
        type: String,
        enum: Object.values(ContentType),
        required: true
    },
    content_url: {
        type: String,
        required: true
    },
    duration: { 
        type: Number,
    },
    order: {
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
    is_downloadable: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Content', contentSchema);