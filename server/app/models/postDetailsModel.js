const mongoose = require("mongoose");

const defaultValue = {
  Choice: "",
  Title: "",
  Image: "",
  Details: "",
  Tags: [],
};

const TempModel = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    trim: true,
  },
  Choice: {
    type: Number,
    required: true,
    trim: true,
  },
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    required: true,
    trim: true,
  },
  Details: {
    type: String,
    required: true,
    trim: true,
  },
  Tags: {
    type: Array,
    required: true,
    trim: true,
  },
});

const PostDetails = mongoose.model("post-detail", TempModel);

module.exports = PostDetails;
