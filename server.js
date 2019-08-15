const express = require("express");

const recipesRouter = require("./recipes/recipes-router.js");
const ingredientsRouter = require("./ingredients/ingredients-router.js");

const server = express();

server.use(express.json());
server.use(logger);

server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

server.use(errHandler);

function errHandler(err, req, res, next) {
  res.status(err.status).json({ message: err.message });
}

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
