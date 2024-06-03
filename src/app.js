const express = require("express");
const app = express();
const handleInternalErrors = require("./utils/serverError");
const routeNotFound = require("./utils/routeNotFound");
const defaultMiddlewares = require("./controllers/middleWares/defaultMiddlewares");

//server default test get route
app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "trade x server is running fine",
  });
});

//used some default and installed middlewares
defaultMiddlewares(express, app);

//route not found handler
app.all("*", routeNotFound);

//handle Internal server errors
app.use(handleInternalErrors);

module.exports = app;
