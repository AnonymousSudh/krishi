const express = require("express");
const router = express.Router();
require('../db/connection');
const sellcrop = require("../model/sell_crop_schema")
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
const userschema = require("../model/userschema")
var nestedPop = require('nested-pop');







router.get('/getAllBuyingData', async (req, res) => {
    try {
        // .populate("crop_name_id").populate("seller_id")
        // .populate("seller_id", "name email address phoneno ").populate("variety_id")
        const buy_data = await sellcrop.find()
        console.log(buy_data);

        // const trial = await admin_varietywithcropid_list.findById("62bdbb7b7f47bcdad835f54f").populate("crop_id")
        // console.log(trial);

    



        // console.log(buy_data);



        // console.log(trail);


        // res.send(buy_data)
    } catch (error) {
        console.log(error);
        // variety_list
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