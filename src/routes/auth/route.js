const authRoute = require("express").Router();
const { addUser } = require("../../controllers/api/auth/auth");

authRoute.post("/api/add-user", addUser);

module.exports = authRoute;
