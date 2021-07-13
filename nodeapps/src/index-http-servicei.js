
const http = require('http');
const { findAll } = require('./services/Todo.service')

const port = 3000;

const server = http.createServer(async (req, res) => {
    //send response
    //response headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'customheader': 'customerheadervalue'
    })
    try {
        const TODOS = await findAll();
        res.write(JSON.stringify(TODOS))
        //close the stream
        res.end();
    }
    catch (err) {
        res.write({ code: 404, message: 'Todo not found' })
        res.end();
    }
    //resonse events
    res.on('close', () => {
        console.log('response closed')
    })
    res.on('finish', () => {
        console.log('response finshed')
    })
})

//this event will be fired when a request recived to server
server.on('request', (req, res) => {
    console.log(`Server received Request on ${new Date()}`)
})

//start server
server.listen(port, () => {
    console.log(`HTTP server starts @ ${port}`)
});

