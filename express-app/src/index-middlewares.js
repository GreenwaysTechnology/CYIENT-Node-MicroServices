const express = require('express');
const { findAll, create } = require('./services/Todo.service')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')

const port = 3000;
const app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
//Register middlewares
app.use(bodyParser.json())



//HTTP api
app.get('/', (req, res) => {
    res.end('Express Home');
})

//todo api

app.get('/api/todos/list', async (req, res) => {
    try {
        const todos = await findAll();
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(404).json({ message: error })
    }
});

//
app.post('/api/todos/create', async (req, res) => {

    try {
        const payload = req.body;
        const createdTodo = await create(payload);
        res.status(201).location("/api/todo").json({ message: 'Todo Created', createdTodo })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }

})

//start server

app.listen(port, () => {
    console.log('Express Server is Ready!!!')
})