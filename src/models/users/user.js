const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number },
    verified: { type: Boolean },
  },
  { timestamps: true }
);

const Users = model("Users", userSchema, "users");
module.exports = Users;
