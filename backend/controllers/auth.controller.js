import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    }
    );
};

export const signup = async(req, res) => {
    try {
        const {username, email, password, first_name, last_name, role } = req.body;

        const userExists = await User.findOne({ email });
    }
}