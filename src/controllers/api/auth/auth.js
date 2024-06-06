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

    const saveUser = await Users.create(data);

    res.send(
      saveUser ? { message: "success" } : { error: "something went wrong" }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser };
