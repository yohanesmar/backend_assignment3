const express = require('express');
const userController = require('./userController');
const todoController = require('./todoController');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/register', userController.register);
app.post('/todo', todoController.createTodo);

module.exports = app;



