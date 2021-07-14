const { findAll, create } = require('../services/Todo.service')
const express = require('express')
const todoRouter = express.Router();

//todo resources

todoRouter.get('/list', async (req, res) => {
    try {
        const todos = await findAll();
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(404).json({ message: error })
    }
});

//
todoRouter.post('/create', async (req, res) => {

    try {
        const payload = req.body;
        const createdTodo = await create(payload);
        res.status(201).location("/api/todo").json({ message: 'Todo Created', createdTodo })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }

})

module.exports = todoRouter;