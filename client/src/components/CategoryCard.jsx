import React from 'react'
require("../style/categorycard.css")

function CategoryCard(props) {
    return (
        <>

            <div className='cat_button'>
                <button className='grain'>{props.categoryname}</button>
            </div>

        </>
    )
}

export default CategoryCard