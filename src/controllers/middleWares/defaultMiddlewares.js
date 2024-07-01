require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const defaultMiddlewares = (express, app) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: [process.env.Origin],
      credentials: true,
    })
  );
};

module.exports = defaultMiddlewares;
