import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({ userId: user._id, admin: user.admin }, process.env.JWT_SECRET, { expiresIn: '1d' });
};
