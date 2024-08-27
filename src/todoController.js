const { Todo } = require('../models');

module.exports = {
    createTodo: async (req, res) => {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Invalid input' });
        }

        try {
            const todo = await Todo.create({ title, description });
            res.status(201).json(todo);
        } catch (err) {
            console.error('Error in /todo:', err);
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    }
};





