import express from "express";
import http from "http";
import morgan from "morgan";

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "\\public\\"));

app.use((_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    '<html lang="es"><body><h1>This is an Express Server</h1></body></html>'
  );
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
