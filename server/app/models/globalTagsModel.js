const mongoose = require("mongoose");

const GlobalTagsModel = new mongoose.Schema(
  {
    Tags: {
      type: Array,
      required: true,
      trim: true,
      unique: true,
    },
    Weights: {
      type: Array,
      required: true,
      trim: true,
    },
  },
  { collection: "global-tags" }
);

const GlobalTags = mongoose.model("GlobalTags", GlobalTagsModel);
module.exports = GlobalTags;
