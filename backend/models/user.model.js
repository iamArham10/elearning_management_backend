const mongoose = require('mongoose');
const { UserRole, DefaultMaterial } = require('./constants/enums')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.STUDENT,
        required: true
    },
    bio: {
        type: String
    },
    profile_picture: {
        type: String,
        default: DefaultMaterial.PROFILE_PICTURE
    },
    is_active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    last_login: {
        type: Date
    },
    is_email_verified: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('User', userSchema);