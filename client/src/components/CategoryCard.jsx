import React from 'react'
require("../style/categorycard.css")

function CategoryCard(props) {


    const showCrop=()=>{
        // console.log(props._id);
        localStorage.setItem("buy_variety_id" ,props._id)

    }
    return (
        <>

            <div className='cat_button' >
                <button className='grain' onClick={showCrop}>{props.categoryname}</button>
            </div>

        </>
    )
}

export default CategoryCard