const mongoose = require("mongoose");

const all_variety = new mongoose.Schema({

    variety:String
})

const allVariety = new mongoose.model("all_Variety",all_variety);
module.exports = allVariety;