const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>AWS DevOps Project</title>
            </head>
            <body>
                <h1>Hello from AWS EC2!</h1>
                <h2>My First DevOps Project</h2>
                <p>Node.js application running inside Docker.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log("Application running on port 3000");
});
