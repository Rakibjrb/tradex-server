const addUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    res.send({
      status: 200,
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser };
