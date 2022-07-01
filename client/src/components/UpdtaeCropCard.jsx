import React, { useState } from 'react'
// var nestedPop = require('nested-pop');
import "../style/card.css"
import "../style/updatecropcard.css"

function Card(props) {

    const [crop, setcrop] = useState(props.cropname);
    const [quantity, setquantity] = useState(props.quantity);
    const [price, setprice] = useState(props.price);

    // data.disabled = true;
    
    
    const UpdateName = (e) => {
        // document.getElementById("update_btn").disabled ="true";
        setcrop(e.target.value);
        
    }

    const UpdateDate = () => {

    } 

    return (
        <>
            <div className="card_div">
                <div className='card_value'>
                    <div className="sell_data_holder">

                        <h2>Crop Name</h2>
                        <input type="text" value={crop} onChange={UpdateName} />
                        {/* <h3>{props.varietyname}</h3> */}

                        <h3>Quantity</h3>
                        <input type="text" value={props.quantity} />

                        <h3>Price</h3>
                        <input type="text" value={props.price} />
                        <div className="index_div">

                            <h3 className='index'>{`this is ${props.index} index`}</h3>
                        </div>

                        <button id='updatebtn'  onClick={UpdateDate}>Update</button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Card