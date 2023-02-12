const mongoose = require("mongoose");

const TempModel = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
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
