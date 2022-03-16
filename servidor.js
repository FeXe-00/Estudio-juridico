const api_1 = require('./api_1');
const express = require('express');


const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: }))

api_1(app);

app.listen(port, () => {
    console.log('localhost:'+port)
})

/* const http = require('http'); */

/* console.log(math.add(25,8)); */

/* const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World!');
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
}) */