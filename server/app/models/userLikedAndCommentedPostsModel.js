const mongoose = require("mongoose");

const TempModel = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  likes: {
    type: Array,
    required: true,
    trim: true,
  },
  comments: [
    {
      id: {
        type: String,
        required: true,
        trim: true,
      },
      noOfComments: {
        type: Number,
        required: true,
        trim: true,
      },
    },
  ],
});

const userLikedAndCommentedPosts = mongoose.model(
  "userLikedAndCommentedPosts",
  TempModel
);
module.exports = userLikedAndCommentedPosts;