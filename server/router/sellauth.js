const express = require("express");
const router = express.Router();
require('../db/connection');
const sell_crop_schema = require("../model/sell_crop_schema")
const admin_category_schema = require("../model/admin_category_listSchema")
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
const allcrop = require("../model/allcrop")
const allvariety = require("../model/allvariety")

// router.get("/Sell_crops",(req,res)=> {
//     res.send("hello from the express side")
// });




router.get("/getcategory", async (req, res) => {
    // console.log("inside router");
    const data = await admin_category_schema.find();
    // console.log(data);
    res.send(data);
})


router.post('/getcrop', async (req, res) => {
    const { categoryname, categoryid } = req.body;
    // console.log(categoryname);
    // console.log(categoryid);
    const data = await admin_crop_list.findOne({ category_id: categoryid })
    console.log("this is data.crop_name");
    console.log(data.crop_Namee);
    res.status(200).send(data.crop_Namee)

})

router.post("/getvariety", async (req, res) => {
    const { crop_id,crop } = req.body;
    // console.log("inside getvariety server");
    console.log(crop_id);
    const data = await admin_varietywithcropid_list.findOne({ crop_id: crop_id });
    const data2 = await allcrop.findOne({ crop: crop });
    console.log(data2._id);
    const uniqueCropId =  data2._id;
    const array = [uniqueCropId,data.variety_list]

    // console.log(data.variety_list);
    // res.send(data.variety_list)
    res.send(array)
})

router.post("/getnewvarietyid", async (req, res) => {
    const {varietyname} = req.body;
    const data2 = await allcrop.findOne({ variety: varietyname });
    console.log(data2._id);
    res.send(data2._id)


})



router.post("/Sell_crops", async (req, res) => {
    try {
        // console.log(req.body);
        const sellerid = req.cookies.userid;
        // console.log(sellerid);
        const { crop_id, variety_id, price, quantity, category_id,unit } = req.body
        // console.log(crop_id);

        if (!crop_id || !variety_id || !price || !quantity || !category_id ||!unit) {

            return res.status(400).json({ error: "enter all the details " })

            // alert("please fill all the data");
        }
        const userr = await sell_crop_schema({
            category_id:category_id,
            crop_name_id: crop_id,
            variety_id: variety_id,
            seller_id: sellerid,
            price,
            quantity,
            unit

        }).save();

        res.json({ message: req.body })

        // console.log(userr);
    } catch (err) {
        console.log(err);
    }

});


module.exports = router;