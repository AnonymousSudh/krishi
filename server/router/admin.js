const express = require("express");
const router = express.Router();
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")


router.post('/Uploadcrop', async (req, res) => {

try {
    

    // console.log(req.body);
    const { crop_namee, variety_name } = req.body;
    // console.log(crop_namee);
    // console.log(variety_name);
    const upload_cropp = await admin_crop_list.findOne({ crop_namee: crop_namee });

    // console.log(upload_cropp);  //this will have data of finded crop only or null if not found

    if (!upload_cropp) {

        const savecrop = await admin_crop_list({
            crop_namee
        }).save();

        const crop_id = savecrop._id;
        const savevariety = await admin_varietywithcropid_list({
            variety_list: [{ variety: variety_name }], crop_id
        }).save();

        // console.log(savecrop);
        // console.log(savevariety);
    }
    if (upload_cropp) {
        const cropid = upload_cropp._id;
        const variety = await admin_varietywithcropid_list.findOne({ crop_id: cropid }) // crop hai variety_table me and is crop ko pane ke liye.. ye line likha gaya hai.
        console.log(variety);
        const alreadyexist = await admin_varietywithcropid_list.findOne({
            variety_list: {
                $elemMatch: { variety: variety_name }
            }
        })
        console.log(`this is already exist ${alreadyexist}`);``
        if (!alreadyexist) {

            try {
                const saveanotervariety = await admin_varietywithcropid_list.updateOne(variety,
                    {
                        $push: {
                            variety_list: [{ variety: variety_name }]
                        }
                    })
                // this.variety_list = this.variety_list.concat({ variety: variety_name })
                // await this.save();
                // console.log(saveanotervariety);
            } catch (error) {
                console.log(error);
            }


        }


    }
} catch (error) {
    console.log(error);
    
}
})

router.get('/fetch_crop_id', async(req,res)=>{
    try {
        
        const crop_data = await admin_crop_list.find({},{"crop_namee":1})
        // console.log(crop_data);
        // res.status(200).send(crop_data).json();
        res.status(200).send(crop_data);
        // console.log("hello");

    } catch (error) {
        console.log(error);
        
    }


})



router.get('/getvarietyname', async(req,res)=>{
    const varietyname = await admin_varietywithcropid_list
})




router.post('/sendcropname',async(req,res)=>{
    const {cropname,cropid} = req.body;
    // console.log(cropname);
    // console.log(cropid);
    const data = await admin_varietywithcropid_list.findOne({crop_id:cropid}).populate("crop_id")
    // console.log(data.variety_list);
    // const getvarietyname =await admin_varietywithcropid_list.find().populate("crop_id")
    // console.log(getvarietyname);
    // console.log(getvarietyname[0].variety_list);
    // console.log(data.variety_listt);
    res.status(200).send(data.variety_listt)

})

module.exports = router;

// module.exports = router;












