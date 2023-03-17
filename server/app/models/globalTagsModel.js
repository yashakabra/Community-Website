const mongoose = require("mongoose");

const GlobalTagsModel = new mongoose.Schema(
  { 
    tags:[{
      tag: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      weight: {
        type: Number,
        required: true,
        trim: true,
      },
    }],
  },
  { collection: "global-tags" }
);

const GlobalTags = mongoose.model("GlobalTags", GlobalTagsModel);
module.exports = GlobalTags;
