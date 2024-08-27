const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        try {
            const { name, username, email, password } = req.body;
            const hashedPassword = bcrypt.hashSync(password, 10);
            const user = await User.create({
                name,
                username,
                email,
                password: hashedPassword,
            });
            res.status(201).json(user);
        } catch (err) {
            console.error('Error in /register:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};





