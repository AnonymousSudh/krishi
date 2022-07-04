const express = require("express");
const router = express.Router();
require('../db/connection');
const sellcrop = require("../model/sell_crop_schema")
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
const userschema = require("../model/userschema")
// var nestedPop = require('nested-pop');


router.post('/getAllBuyingData', async (req, res) => {    
    try {
        const{category_id} = req.body
  
        const buy_data = await sellcrop.find({category_id:category_id})
        // .populate("category_id",["category_Name"])
        .populate("crop_name_id",["crop"])
        .populate("variety_id",["variety"])
        .populate("seller_id",["name","email","imageuri","phoneno","address"])
        
        console.log(buy_data);

        res.json(buy_data)
    } catch (error) {
        console.log(error);

    }

})








// router.post('/crop_value', async (req, res) => {
//     try {
//         const crop_name = req.body;
//         // console.log(crop_name);             // { crop_name: 'ssss' }
//         // console.log(crop_name.crop_name);  // wheat

//         const data = await sellcrop.find({ crop_name: crop_name.crop_name })
//         // console.log(data);
//         if (data) {
//             res.status(201).send(data)


//             // data.map((val) => {
//             //     console.log(val.variety);
//             //     // res.send(val.variety)

//             // })
//         }

//     } catch (error) {
//         console.log(error);

//     }

//     // console.log(data.variety);


// })

module.exports = router;