require("dotenv").config();
const cors = require("cors");

const defaultMiddlewares = (express, app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: [process.env.origin],
      credentials: true,
    })
  );
};

module.exports = defaultMiddlewares;
