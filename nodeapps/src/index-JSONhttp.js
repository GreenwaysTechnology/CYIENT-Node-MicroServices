
const http = require('http');
const TODOS = require('./mock-data/todo');

const port = 3000;

const server=http.createServer((req,res)=>{

    //send response
    const todosJson = JSON.stringify(TODOS);

    //response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'customheader' : 'customerheadervalue'
    })

    res.write(todosJson)
    //close the stream
    res.end();
    //resonse events
    res.on('close',()=>{
        console.log('response closed')
    })
    res.on('finish',()=>{
        console.log('response finshed')
    })
})

//this event will be fired when a request recived to server
server.on('request',(req,res)=>{
    console.log(`Server received Request on ${new Date()}`)
})

//start server
server.listen(port,()=>{
    console.log(`HTTP server starts @ ${port}`)
});

