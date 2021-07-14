const express = require('express');
const port = 3000;
const app =  express();

//home page
app.get('/',(req,res)=>{
    res.end('Express Home');
})
app.get('/hello',(req,res)=>{
    res.end('Hello Express -GET');
})
app.post('/hello',(req,res)=>{
    res.end('Hello Express -POST');
})
app.delete('/hello',(req,res)=>{
    res.end('Hello Express -DELET');
})
app.put('/hello',(req,res)=>{
    res.end('Hello Express -PUT');
})

app.get('/hai',(req,res)=>{
    res.end('Hi Express');
})
app.get('/welcome',(req,res)=>{
    res.end('Welcome Express');
})
app.listen(port,()=>{
    console.log('Express Server is Ready!!!')
})