const express = require("express");
const router = express.Router();
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
const admin_category_list = require('../model/admin_category_listSchema')
const allcrop = require("../model/allcrop");
const allvariety = require("../model/allvariety");
const message_list = require("../model/admin_message_schema")



router.post('/uploadcrop', async (req, res) => {   // at adminpanel.jsx

    try {


        // console.log(req.body);
        const { category_Name, crop_Name, variety_Name } = req.body;

        if(!category_Name || !crop_Name || !variety_Name){
            return res.status(402).send();

        }

        const category = await admin_category_list.findOne({ category_Name: category_Name })
        // const upload_cropp = await admin_crop_list.findOne({ crop_Name });
        console.log(category);
        // console.log(upload_cropp);  //this will have data of finded crop only or null if not found

        if (!category) {
            const savecategory = await admin_category_list({ category_Name }).save();
            // console.log("hello");
            console.log(savecategory);
            // console.log("helo2");
            const categoryId = savecategory._id;
            // console.log(`this is category id ${categoryId}`);
            // console.log("hello");
            const savecrop = await admin_crop_list({
                crop_Namee: { name: crop_Name },
                category_id: categoryId
            }).save();

            console.log(savecrop.crop_Namee[0]._id);
            const cropid = savecrop.crop_Namee[0]._id;

            console.log(`this is crop saving at admin_crop_schema ${savecrop} `);


            const savevariety = await admin_varietywithcropid_list({
                category_ids: categoryId,
                crop_id: cropid,
                variety_list: [{ variety_Name }]
            }).save();

            // console.log("this is save vaiety");
            console.log(`this is save vareity at admin table ${savevariety}`);

            const savecrop2 = await allcrop({
                crop: crop_Name
            }).save();

            console.log(`this is saving crop at allcrop_schema ${savecrop2}`);

            const savevariety2 = await allvariety({
                variety: variety_Name
            }).save();

            console.log(`this is savevariety at all vareity table ${savevariety2}`);




            // console.log(`this is croid ${cropid}`);


            res.status(200).send()

        }
        else { // category hai

            const categoryId = category._id;
            // console.log("this is category");
            // console.log(category);
            console.log("this is category id");
            console.log(categoryId);



            const crop = await admin_crop_list.findOne({

                crop_Namee: {
                    $elemMatch: { name: crop_Name }
                }
            });
            console.log(crop);

            if (!crop) {
                const addcrop = await admin_crop_list.findOne({ category_id: categoryId })
                // console.log(addcrop);

                addcrop.crop_Namee.push({ name: crop_Name })
                // console.log("hh");
                // console.log(addcrop);
                // console.log("hh");
                const result2 = addcrop.crop_Namee.find(({ name }) => name === crop_Name);
                // console.log(result2);
                // const crop = await admin_crop_list.findOne({

                //     crop_Namee: {
                //         $elemMatch: { name: crop_Name }
                //     }
                // });
                // console.log("gg");
// console.log(crop);
// console.log("gg");
                const result = await addcrop.save();
                // console.log(result._id);
                const cropid = result2._id;
                console.log(cropid);
                console.log(`this is new added crop data in existing array ${result}`);


                const savecrop2 = await allcrop({
                    crop: crop_Name
                }).save();

                console.log(`this is saving crop at allcrop list ${savecrop2}`);

                const savevariety2 = await allvariety({
                    variety:variety_Name
                }).save();


                const savevariety = await admin_varietywithcropid_list({
                    category_ids: categoryId,
                    crop_id: cropid,
                    variety_list: [{ variety_Name }]

                }).save();

                console.log(`this is savevariety for new crop against existing category ${savevariety}`);

                res.status(200).send()

            }
            else { // categoty hai and crop bhi hai but variety nahi hai admin_variety_schema me

                // console.log("i am else part for variety");
                // // console.log(crop.crop_Namee);
                // // const data = crop.crop_Namee;
                // // data.find( ({name} ) => name === 'Peanuts' );
                // const cropp = crop.crop_Namee.find(({ name }) => name === crop_Name)
                // // console.log("this is that cropid which we use at variety");
                // console.log(cropp);
                // console.log(`this is id for existing crop in existing category but we want to add variety ${cropp._id}`); //uski cropid hai jo value maine ui pe dali hai

              


                const addvariety = await admin_varietywithcropid_list.findOne({
                    variety_list: {
                        $elemMatch: { variety_Name: variety_Name }
                    }
                })
                if (!addvariety) {
                    const addcrop = await admin_varietywithcropid_list.findOne({ category_id:categoryId })

                    // const varietylist = await admin_varietywithcropid_list.findOne({ crop_id: cropp._id });
                    // console.log(varietylist);
                    // console.log("hello");



                    addcrop.variety_list.push({ variety_Name: variety_Name })
                    const result = await addcrop.save();
                    console.log(`this is save variety ${result}`);
                    console.log(result._id);

                    res.status(200).send();
                }
                if (addvariety) {
                    res.status(401).send();
                }
                // if (!varietylist) {
                //     const newvarity = admin_varietywithcropid_list({
                //         category_ids: categoryId, crop_id: cropp._id, variety_list: [{ variety_Name: variety_Name }]

                //     }).save();

                //     // const savecrop2 = await allcrop({
                //     //     crop:crop_Name
                //     // })

                //     // const savevariety3 = await allvariety({
                //     //     variety:variety_Name
                //     // })

                //     // const savecrop2 = await allcrop({
                //     //     crop:crop_Name
                //     // })

                //     const savevariety2 = await allvariety({
                //         variety:variety_Name
                //     }).save();
                // } 
                // else {
                //     const addvariety = await admin_varietywithcropid_list.findOne({
                //         variety_list: {
                //             $elemMatch: { variety_Name: variety_Name }
                //         }
                //     });
                //     if (!addvariety) {
                //         varietylist.variety_list.push({ variety_Name: variety_Name })
                //         await varietylist.save();

                //         // const savecrop2 = await allcrop({
                //         //     crop:crop_Name
                //         // })

                //         const savevariety2 = await allvariety({
                //             variety:variety_Name
                //         }).save();
                //     }
                //     else{
                //         res.status(401).send();

                //     }


            }

            // const varietylist = await admin_varietywithcropid_list.findOne({

            //     // { variety_list: [{variety_Name }]}
            //     variety_list: {
            //         $elemMatch: { variety_Name: variety_Name }
            //     }
            // });
            // console.log(`this is variety list ${varietylist}`);

            // if (!varietylist) {
            //     // console.log("i am not present");
            //     // const savevariety = await admin_varietywithcropid_list.
            //     console.log("inside !variety");
            //     console.log(cropp._id);
            //     const addvariety = await admin_varietywithcropid_list.findOne({ crop_id: cropp._id })

            //     console.log("this is ");
            //     console.log(addvariety);

            //     if(!addvariety){
            //         const newvarity = admin_varietywithcropid_list({
            //             category_ids:categoryId,crop_id:cropp._id,variety_list:[{variety_Name:variety_Name}]

            //     }).save();

            //     }
            //     else{
            //         const kuchbhi = await admin_varietywithcropid_list.find
            //         addvariety.variety_list.push({ variety_Name: variety_Name })
            //         await addvariety.save();

            //     }
            // const newvarity = admin_varietywithcropid_list({

            // })


            // console.log(addvariety);
            // if(savevariety){
            //     res.status(200)
            // }
        }
    }



    catch (error) {
        console.log(error);

    }
})

router.get('/fetch_crop_id', async (req, res) => {
    try {

        const crop_data = await admin_crop_list.find({}, { "crop_namee": 1 })
        // console.log(crop_data);
        // res.status(200).send(crop_data).json();
        res.status(200).send(crop_data);
        // console.log("hello");

    } catch (error) {
        console.log(error);

    }


})



router.get('/getvarietyname', async (req, res) => {
    const varietyname = await admin_varietywithcropid_list
})

router.post('/submitmsg', async (req,res)=>{  //at contactus.jsx

    const {message, reason ,userid} = req.body;

    const savemsg = await message_list({
        user_id:userid,
        reason:reason,
        message:message
    }).save();
    // console.log(savemsg);
    if(savemsg){
        res.status(200).send();
    }

})



router.get('/showmsg' ,async (req,res)=>{
    const msg = await message_list.find()
    .populate("user_id" ,["name","email",])
    console.log(msg);
    
    res.send(msg)
})

module.exports = router;

// module.exports = router;












