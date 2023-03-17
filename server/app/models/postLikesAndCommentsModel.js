const mongoose = require("mongoose");

const TempModel = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  likes: {
    type: Number,
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
      message: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const PostLikesAndComments = mongoose.model(
  "PostLikesAndCommentsById",
  TempModel
);
module.exports = PostLikesAndComments;