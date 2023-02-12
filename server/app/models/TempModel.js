const mongoose = require("mongoose");

const TempModel = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
    }
);

const Temp = mongoose.model("Temp", TempModel, "Temps");

module.exports = Temp;