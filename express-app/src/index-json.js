const express = require('express');
const { findAll } = require('./services/Todo.service')

const port = 3000;
const app = express();

// console.log(app) //express object

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

//start server

app.listen(port, () => {
    console.log('Express Server is Ready!!!')
})