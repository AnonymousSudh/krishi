import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card2 from "../components/UpdtaeCropCard"
require('../style/yourcrop.css')

function YourCrop() {

    const [cropdata, setcropdata] = useState([]);
    const trial2 = async () => {
        const res = await fetch('/getUserCrop', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"

            },
            Credential: "include"

        })

        const croplist = await res.json();
        // console.log("hello");
        // console.log(croplist);
        setcropdata(croplist)


    }


    useEffect(() => {
        trial2();
    }, [])

    return (
        <>
            <h1>hello</h1>
            {/* {console.log(cropdata)} */}
            {cropdata.map((val ,index) => {
                console.log(val.quantity);
                return (
                <>
    
                <Card2
                    _id={val._id}
                    category={val.category_id.category_Name}
                    cropname ={val.crop_name_id.crop}
                    variety={val.variety_id.variety}
                    quantity ={val.quantity}
                    price={val.price}
                    unit={val.unit}
                    index={index}
                
                />
                {/* <h1>{index}</h1> */}
                    
                </>)
            })}


        </>
    )
}

export default YourCrop