const mongoose = require("mongoose");

const GlobalTagsModel = new mongoose.Schema(
  { 
    _id: {
      type:String,
      required:true,
      unique:true,
    },
    tags:[{tag: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    weight: {
      type: Number,
      required: true,
      trim: true,
    },}],
  },
  { collection: "global-tags" }
);

const GlobalTags = mongoose.model("GlobalTags", GlobalTagsModel);
module.exports = GlobalTags;
