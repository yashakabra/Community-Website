const mongoose = require("mongoose");

const defaultValue = {
  Name: "",
  Age: "",
  UserName: "",
  Job_Type: 0,
  City: "",
  State: "",
  Pincode: "",
  Introduction: "",
};

const TempModel = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Age: {
    type: String,
    required: true,
    trim: true,
  },
  UserName: {
    type: String,
    required: true,
    trim: true,
  },
  Job_Type: {
    type: Number,
    required: true,
    trim: true,
  },
  City: {
    type: String,
    required: true,
    trim: true,
  },
  State: {
    type: String,
    required: true,
    trim: true,
  },
  Pincode: {
    type: String,
    required: true,
    trim: true,
  },
  Introduction: {
    type: String,
    required: true,
    trim: true,
  },
});

const UserDetails = mongoose.model("user-detail", TempModel);

module.exports = UserDetails;
