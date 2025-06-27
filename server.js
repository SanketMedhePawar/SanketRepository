// server.js

const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <html>
      <head><title>Node.js Server</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>Hello, Sanket!</h1>
        <p>This is your Node.js web server running on EC2 🟢</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
  res.end();
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});

