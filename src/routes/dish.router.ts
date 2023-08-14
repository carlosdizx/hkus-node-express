import express from "express";
import bodyParser from "body-parser";

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((_, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get((_, res) => {
    res.send({ message: "Sending all the dishes" }).end();
  })
  .post((req, res) => {
    res.send({ message: "Adding the dishes", dish: req.body }).end();
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send({ message: "Put operation not supported on /dishes" }).end();
  })
  .delete((req, res) => {
    res.send({ message: "Deleting dishes selected" }).end();
  });

export default dishRouter;
