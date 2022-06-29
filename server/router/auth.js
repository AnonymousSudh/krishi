// const { LOADIPHLPAPI } = require("dns");
const express = require("express");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");

const router = express.Router();
require('../db/connection');

const feedback_list = require("../model/adminschema");
const userList = require("../model/userschema");
const emaillogindata = require("../model/emailloginschema");
const sellcrop = require('../model/sell_crop_schema')
const authenticate = require("../middleware/authenticate");
// const admin_crop_list = require("../model/admin_crop_listingschema")
// const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
const allSelledCrop = require("../model/sell_crop_schema")
// require('../crop/buycrop')
// require('./buyauth');

router.use(cookieParser())

// import { useNavigate,useHistory } from 'react-router-dom';

// port= process.env.PORT; 
// port= 5000;

// router.get("/",(req,res)=>{
//     res.send("hello from the express router from router/auth file")
// });
// router.get("/home", (req,res)=>{
//     res.send("hello from the home us page of express router from router/auth file")
// });
// router.get("/signin",(req,res)=>{
//     res.send("hello from the express side")
// });
// router.get("/signup",(req,res)=>{
//     res.send("hello from the express side")
// });



// creating a post method for signup page , so that user data may get save to our database

router.post("/signup", async (req, res) => {

    // console.log(req.body);
    const google_data = req.body;
    const user_google_data = google_data.response.profileObj;
    const user_id_token = google_data.response.tokenId;

    const email = user_google_data.email;
    const imageuri = user_google_data.imageUrl;
    const name = user_google_data.name;
    const google_token = google_data.response.tokenId;


    const pre_email = await userList.findOne({ email: email })

    if (!pre_email) {

        const user = await userList({
            name, email, imageuri, google_token
        }).save();

        res.cookie("google_token", google_token, { // here we storing our token in cookies
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true

        })

        return res.status(203).send();

    }

    if (pre_email) {
        if (pre_email.email === "mauryasudhanshu930@gmail.com") {
            res.status(205).send();
        }

        const update = await userList.updateOne({ _id: pre_email._id }, {
            $set: {
                google_token
            }
        }
        );

        // console.log(update);

        res.cookie("google_token", google_token, { // here we storing our token in cookies
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        })

      
        return res.status(201).send();

    }



   

});




//         // userList.findOne({ email: login_email, password: login_password });



router.post('/adminpanel', async (req, res) => {

    const namee = req.body;
    const name = namee.name;

    const dataas = await feedback_list({
        name
    }).save();

})




//creating post method to get the data which a user fill in sign_in box(email, password)
router.post("/signin", async (req, res) => {

    try {
        // we are getting all the data through object descrutering 
        const { login_email, login_password } = req.body

        // check validataion if user fill the box or not
        if (!login_email || !login_password) {

            res.status(402).json("please fill the data")
        }
        // search for data that the user enter with our database table in mongodb

        const result = await userList.findOne({ email: login_email, password: login_password });
        // console.log(`this is data from mongodb in auth file ${result}`);


        if (result) {
            console.log(result._id);
            // const isMatch = await bcrypt.compare(password, userLogin.password)
            // console.log("hello 1");
            token = await result.generateAuthToken();
            // console.log("hello 2");
            // console.log(token)
            // console.log("hello 3");

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true


            })
            
            res.cookie("userid", result._id, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true


            })
            res.status(200).send();
        }





        // if (result != null) {
        //     // console.log(result.email);
        //     console.log("All data of that user is : ");
        //     // console.log(result);

        //     // token = await result.generateAuthToken();        
        //     // res.cookie("jwtokenn" ,token,{
        //     //     expires: new Date(Date.now() + 3000009900),
        //     //     httpOnly:true
        //     // });
        //     res.status(200).send();

       
        // }
        else {
            res.status(400).json({ error: "user error" })
            // alert("invalid details")
        }


    } catch (err) {
        console.log(err);
    }



});



router.post('/Enter_details', authenticate, async (req, res) => {
    try {
        const token = req.cookies.google_token;
        console.log(req.body);
        const { phoneno, address, usertype } = req.body
        // console.log(phoneno);



        // const update = await userList.update({ google_token: token }, {
        //     $set: {name: '85767'}
        // })

        // const update = await userList.insert( { item: "card"} )

        // const update = await userList.aggregate([
        //     {
        //        $addFields:{"phonemo":3300} 
        //     }
        // ])
        const update = await userList.updateMany({ google_token: token },
            [
                {
                    "$addFields": { "phoneno": phoneno }

                },
                {
                    "$addFields": { "address": address }
                },
                {
                    "$addFields": { "usertype": usertype }
                }
            ])

        // const data = await userList.findOne({ google_token: token })
        // console.log(data);

        res.status(201).send();

    } catch (err) {
        console.log(err);
    }

    // console.log();
    // res.status(201).json(email);

})

router.get('/about', authenticate, (req, res) => {
    

    // console.log(req.rootUser);
    res.send(req.rootUser);

})


router.get('/weather',authenticate, async (req, res) => {

    // console.log(`this is all the data from auth ${req.rootUser}`);
    // try {
        const address = req.rootUser;
        // res.status(200).send(req.rootUser);

    //     // const address = await userList.findOne(/);
    //     // console.log(address);
        res.status(200).send(address);

    // } catch (err) {
    //     console.log(err);
    // }
    // res.send(req.rootUser);

})



router.get('/logout' ,(req,res)=>{

    res.clearCookie('jwtoken', {path:'/'});
    res.clearCookie('google_token', {path:'/'});
    res.status(200).send();
    


})



router.get('/getUserCrop', async(req,res)=>{
    const userid = req.cookies.userid;
    console.log(userid);
    // console.log("hello");
    const data = await allSelledCrop.find({seller_id:userid}).populate("seller_id","address").populate("crop_name_id","crop_name")
    console.log(data);
    // data.polpuate("crop_name_id")
    res.status(200).send(data);



})

router.get('/home',authenticate,(req,res)=>{

    

})
module.exports = router;