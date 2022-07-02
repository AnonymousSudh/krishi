const mongoose = require("mongoose");

const all_crop = new mongoose.Schema({
    crop:String
})

const allCrop = new mongoose.model("all_Crop",all_crop)

module.exports = allCrop;