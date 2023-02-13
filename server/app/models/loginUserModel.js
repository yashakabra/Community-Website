const mongoose = require("mongoose");

const RegisterUserModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    flag: {
      type: Boolean,
      required: true,
      trim: true,
    },
  },
  { collection: "register-user" }
);

const RegisterUser = mongoose.model("RegisterUser", RegisterUserModel);
module.exports = RegisterUser;
