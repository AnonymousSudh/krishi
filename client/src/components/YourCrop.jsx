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
            
            {cropdata.map((val ,index) => {
                console.log(val.quantity);
                return (
                <>
                {/* <div className="onedata">

                    <div>{val.crop_name_id.crop_namee}</div>
                    <div>{val.price}</div>
                    <div>{val.quantity}</div>
                    <div>{val.seller_id.address}</div>
                </div> */}
                <Card2
                    cropname ={val.crop_name_id.crop_namee}
                    quantity ={val.quantity}
                    price={val.price}
                    index={index}
                
                />
                {/* <h1>{index}</h1> */}
                    
                </>)
            })}


        </>
    )
}

export default YourCrop