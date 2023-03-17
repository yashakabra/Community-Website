const mongoose = require("mongoose");

const UserTagsModel = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        tag: {
          type: String,
          required: true,
          trim: true,
        },
        weight: {
          type: Number,
          required: true,
          trim: true,
        },
      }
    ],
  },
  { collection: "user-tags" }
);

const UserTags = mongoose.model("UserTags", UserTagsModel);
module.exports = UserTags;
