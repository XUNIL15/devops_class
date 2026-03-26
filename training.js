const fs = require("fs").promises;
const http = require("http");
port = 8000;
host = "0.0.0.0";
let index;

const requireListener = (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(index);
}

server = http.createServer(requireListener);

fs.readFile(__dirname+"/index.html").then(contents=>{
    index = contents;
    server.listen(port, host, ab=>{
        console.log(`The server is listening  at ${host} on port ${port}\n ${new Date()}`)
    });
}).catch(err=>{
    console.error(`Could not read index.html file ${err}`);
    process.exit(-1);
})