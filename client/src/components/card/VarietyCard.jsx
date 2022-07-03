import React from 'react'
import { useHistory } from 'react-router-dom'
require("../../style/varietycard.css")
// import H
function VarietyCard(prop) {
    const history = useHistory();
    

    const openBuyPanel=()=>{
        // alert("hello")
        history.push("./Buy_crop");
        // alert("hllo2")

    }
    return (
        <>

            <div className='cat_buttonn' >
                <button className='vareitybtn' onClick={openBuyPanel}>{prop.varietyName}</button>
            </div>
        </>
    )
}

export default VarietyCard