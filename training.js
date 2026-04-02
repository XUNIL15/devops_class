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