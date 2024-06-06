const Users = require("../../../models/users/user");
const {
  generateHash,
  generateUserName,
} = require("../../../utils/passwordManager");

const addUser = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const data = {
      ...userInfo,
      password: generateHash(userInfo.password),
      username: generateUserName(userInfo.fullname),
      balance: 0,
      verifyed: false,
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

module.exports = { addUser };
