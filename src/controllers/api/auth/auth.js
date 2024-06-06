const Users = require("../../../models/users/user");
const {
  generateHash,
  generateUserName,
  checkLoginPassword,
} = require("../../../utils/passwordManager");

const addUser = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const data = {
      ...userInfo,
      password: generateHash(userInfo.password),
      username: generateUserName(userInfo.fullname),
      balance: 0,
      verified: false,
      auth: {
        loginToken: generateHash({
          name: userInfo.fullname,
          email: userInfo.email,
        }),
      },
    };

    const foundEmail = await Users.findOne({ email: userInfo.email });
    if (foundEmail) {
      const emailFoundError = new Error("Email has been already registered");
      emailFoundError.status = 404;
      return next(emailFoundError);
    }

    const saveUser = await Users.create(data);

    res.send(
      saveUser ? { message: "success" } : { error: "something went wrong" }
    );
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const data = req.body;
    const isUser = await Users.findOne({ email: data.email }, "password");

    if (!isUser) {
      const error = new Error("User not found on this email");
      error.status = 403;
      return next(error);
    }

    if (!checkLoginPassword(isUser.password, data.password)) {
      const error = new Error("Invalid password");
      error.status = 403;
      return next(error);
    }

    const cookieInfo = await Users.findOne({ email: data.email }, "auth");
    const loginToken = cookieInfo?.auth?.loginToken;

    res.cookie("loginToken", loginToken).send({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, userLogin };
