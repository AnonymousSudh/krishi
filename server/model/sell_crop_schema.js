const mongoose = require('mongoose');
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")

const sell_crop_schema = new mongoose.Schema({
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category_list"
    }, 
    crop_name_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'all_Crop'
    }, 
    variety_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "all_Variety"
        // autopopulate: true

    },
    seller_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_table'
    }
    , 
    price: Number,
    quantity: Number,
    unit:String



})

const sell_crop_list = new mongoose.model("sell_crop_details", sell_crop_schema);

// sell_crop_list.plugin(require('mongoose-autopopulate'));
module.exports = sell_crop_list;
