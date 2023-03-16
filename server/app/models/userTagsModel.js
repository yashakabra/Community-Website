const mongoose = require("mongoose");

const UserTagsModel = new mongoose.Schema(
  {
    _id: {
        type: String,
        required: true,
        trim: true,
      },
      Tags: {
        type: Array,
        required: true,
        trim: true,
      },
      Weights: {
        type: Array,
        required: true,
        trim: true,
      },
  },
  { collection: "user-tags" }
);

const UserTags = mongoose.model("UserTags", UserTagsModel);
module.exports = UserTags;
