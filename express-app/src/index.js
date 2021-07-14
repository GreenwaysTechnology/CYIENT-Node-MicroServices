const initdb = require('./mock-data/monogoinit');
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const todoRouter = require('./routers/todo.router')
const customerRouter = require('./routers/customers.router');

initdb();


const port = 3000;
const app = express();

//view engine integration

app.set('view engine', 'pug')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
//Register middlewares
app.use(bodyParser.json())

//bind todrouter with application.
app.use('/api/todos', todoRouter)
app.use('/api/customers', customerRouter)

//HTTP api
app.get('/', (req, res) => {
    res.render('index', { title: 'CYIENT', message: 'Welcome to CYIENT API Server'})
})

//start server
app.listen(port, () => {
    console.log('Express Server is Ready!!!')
})




