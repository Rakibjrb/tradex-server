require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateHash = (password) => {
  const hash = jwt.sign(password, process.env.User_secrete);
  return hash;
};

const generateUserName = (fullname) => {
  const name = fullname.toLowerCase().replace(" ", "_");
  const username =
    name +
    new Date().getMilliseconds() +
    new Date().getMinutes() +
    new Date().getDate();
  return username;
};

module.exports = { generateHash, generateUserName };
