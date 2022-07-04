import React, { useState } from 'react'
// var nestedPop = require('nested-pop');
import "../style/card.css"
import "../style/yourcropcard.css"

function Card(props) {
    const [id, setId] = useState(props._id);
    const [categoty, setCategory] = useState(props.category);
    const [crop, setcrop] = useState(props.cropname);
    const [variety, setVariety] = useState(props.variety);
    const [quantity, setquantity] = useState(props.quantity);
    const [price, setprice] = useState(props.price);
    const [unit, setUnit] = useState(props.unit);

    // data.disabled = true;
    // const updateCrop = (e) => {
    //     // document.getElementById("update_btn").disabled ="true";
    //     setcrop(e.target.value);


    // }

    // const updateVariety = (e) => {
    //     // document.getElementById("update_btn").disabled ="true";
    //     setVariety(e.target.value);


    // }
    const updateQuantity = (e) => {
        // document.getElementById("update_btn").disabled ="true";
        setquantity(e.target.value);


    }
    const updatePrice = (e) => {
        // document.getElementById("update_btn").disabled ="true";
        setprice(e.target.value);


    }
    const setunit =(e)=>{
        // console.log("df");
        const unitValue = document.getElementById("unit").value;
        setUnit(unitValue)
        
        
    }

    const updateData = async () => {
        const userid = localStorage.getItem("userid")
        // console.log(;
        const updatedata = await fetch('/updateOwnCrop', {  //at authjs
            method: "POST",
            headers: {
                "Content-Type": "application/json"

                // "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity, price, id,unit
            })

        })
    }

    const deletecrop = async()=>{
        // const deletedata = await findByIdandDelete(id);
        // console.log(deletedata);
        const deletedata = await fetch('/deleteOWnCrop', { //at authjs
            method: "POST",
            headers: {
                "Content-Type": "application/json"

                // "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })

        })
        if(deletedata){
            alert("data deleted")
        }

    }

    return (
        <>
            <div className="card_div">
                {/* <div className='card_value'> */}
                <div className="ownsell_data_holder">

                    <h2>category Name</h2>
                    <input type="text" value={categoty} />

                    <h2>Crop Name</h2>
                    <input type="text" value={crop}  />

                    <h2>variety Name</h2>
                    <input type="text" value={variety} />

                    <h3>Quantity</h3>
                    <input type="text" value={quantity} onChange={updateQuantity} />

                    <h3>Price</h3>
                    <input type="text" value={price} onChange={updatePrice} />

                    <select id="unit" onChange={setunit}>
                        <option selected >{props.unit}</option>
                        <option value="kg">kg</option>
                        <option value="ton">Ton</option>
                        <option value="man">Man</option>
                        {/* <option value="audi" selected>Audi</option> */}
                    </select>

                </div>

                <div className="ingo_btn">

                    <div className="index_div">

                        <h3 className='index'>{`this is ${props.index} index`}</h3>
                    </div>

                    <button id='updatebtn' onClick={updateData}>Update</button>
                    
                    <div className="deletecrop">
                        <button id='deletebtn' onClick={deletecrop}>Delete</button>
                    </div>

                </div>

            </div>
            {/* </div> */}

        </>
    )
}

export default Card