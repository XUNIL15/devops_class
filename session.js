const http = require('http');

const sessions = {}; // stockage des sessions côté serveur

const server = http.createServer((req, res) => {

    // 📌 LOGIN simulé
    if (req.url === '/login') {
        const sessionId = Date.now().toString();

        sessions[sessionId] = {
            userId: 1,
            username: "Abdoul"
        };

        res.setHeader('Set-Cookie', `sessionId=${sessionId}`);
        res.end("Connecté !");
        return;
    }

    // 📌 LECTURE SESSION
    if (req.url === '/profile') {
        const cookie = req.headers.cookie;

        if (!cookie) {
            res.end("Pas connecté");
            return;
        }

        const sessionId = cookie.split('=')[1];
        const session = sessions[sessionId];

        if (!session) {
            res.end("Session invalide");
            return;
        }

        res.end(`Bienvenue ${session.username}`);
        return;
    }

    res.end("Route inconnue");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});