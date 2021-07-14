const express = require('express');
const { findAll,create } = require('./services/Todo.service')

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

//
app.post('/api/todos/create', async (req, res) => {

    let todo = '';
    req.on('data', chunk => {
        todo += chunk
        
    })
    
    req.on('end', async() => {
        try {
            console.log('end event')
            const result = await create(todo);
            console.log(`result ${result}`)
            res.status(201).location("/api/todos/create").json({ message: 'Todo Created'})
        }
        catch (error) {
            res.status(404).json({ message: error })
        }
    });

})

//start server

app.listen(port, () => {
    console.log('Express Server is Ready!!!')
})