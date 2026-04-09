const https = require('https');
const fs = require('fs').promises;

const host = "0.0.0.0";//localhost
const port = 8000;

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(indexFile);
};

let indexFile;

async function startServer() {
    try {
        indexFile = await fs.readFile(__dirname + "/index.html");

        const key = await fs.readFile(__dirname + "/key.pem");
        const cert = await fs.readFile(__dirname + "/cert.pem");

        const server = https.createServer({
            key: key,
            cert: cert
        }, requestListener);

        server.listen(port, host, () => {
            console.log(`Server running at https://${host}:${port}`);
        });

    } catch (err) {
        console.error("Erreur :", err);
    }
}

startServer();