import express from "express";
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(__dirname + "\\public\\"));

app.all("/dishes", (_, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/dishes", (_, res) => {
  res.send({ message: "Sending all the dishes" }).end();
});

app.post("/dishes", (req, res) => {
  res.send({ message: "Adding the dishes", dish: req.body }).end();
});

app.put("/dishes", (req, res) => {
  res.statusCode = 403;
  res.send({ message: "Put operation not supported on /dishes" }).end();
});

app.delete("/dishes", (req, res) => {
  res.send({ message: "Deleting dishes selected" }).end();
});

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
