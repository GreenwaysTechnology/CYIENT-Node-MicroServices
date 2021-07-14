const express = require('express');

// console.log(express); //returns function

//create application object by calling express()

const port = 3000;
const app =  express();

// console.log(app) //express object

//HTTP api
app.get('/',(req,res)=>{
    res.end('Express Home');
})

//start server

app.listen(port,()=>{
    console.log('Express Server is Ready!!!')
})