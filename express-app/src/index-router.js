const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const todoRouter = require('./routers/todo.router')

const port = 3000;
const app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
//Register middlewares
app.use(bodyParser.json())

//bind todrouter with application.
app.use('/api/todos',todoRouter)


//HTTP api
app.get('/', (req, res) => {
    res.end('Express Home');
})

//start server
app.listen(port, () => {
    console.log('Express Server is Ready!!!')
})