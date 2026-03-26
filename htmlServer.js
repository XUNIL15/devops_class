const http = require('http');
const fs = require ('fs').promises;
const host = "0.0.0.0"; // localhost 
const port = 8000;

let indexFile;
// Request listener
const requestListener =(req, res)=>{
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(indexFile);
};

const server = http.createServer(requestListener);
fs.readFile(__dirname+"/index.html").then(contents=>{
    indexFile=contents;
    server.listen(port, host, ()=>{
    console.log(`Server runnin at http://${host}:${port}\n ${new Date()}`);
})
}).catch(err=>{
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
});