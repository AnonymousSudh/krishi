const express = require("express");
const router = express.Router();
require('../db/connection');
const sell_crop_schema = require("../model/sell_crop_schema")

// router.get("/Sell_crops",(req,res)=> {
//     res.send("hello from the express side")
// });


router.post("/Sell_crops", async(req,res)=>{
    try {
        // console.log(req.body);
        const sellerid = req.cookies.userid;
        // console.log(sellerid);
        const {  crop_id,variety_id, price, quantity } = req.body
        // console.log(crop_id);

        if(!crop_id || !variety_id || !price || !quantity){

            return res.status(400).json({error:"enter all the details "})
            
            // alert("please fill all the data");
        }


        
        const userr = await sell_crop_schema({
            crop_name_id:crop_id,variety_id:variety_id,seller_id:sellerid, price, quantity
        }).save();

        res.json({ message:req.body})
        // console.log(userr);

    } catch (err) {
        console.log(err);
    }


});

module.exports = router;