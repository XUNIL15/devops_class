const http = require('http');
const fs = require ('fs').promises;
const host = "0.0.0.0"; // localhost 
const port = 8000;

// Request listener
const requestListener =(req, res)=>{
    fs.readFile(__dirname+"/index.html").then(contents=>{
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(contents);
    }).catch(err=>{
        res.writeHead(500); // statusCode=500
        res.end("Internal Server Error");
        return;
    })
};

const server = http.createServer(requestListener);
server.listen(port, host, ()=>{
    console.log(`Server runnin at http://${host}:${port}\n ${new Date()}`);
})