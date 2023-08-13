import express from "express";
import http from "http";

const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.header("Content-Type", "text/html");
  res.end('<html lang="es"><h1>This is an Express server</h1></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}`)
);
