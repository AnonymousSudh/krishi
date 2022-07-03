import React from 'react'

function CategoryCard(props) {
    return (
        <>

            <div className='cat_button'>
                <button className='grain'>{props.categoryname}</button>
            </div>
            {/* <CategoryCard
                categoryname={props.categoryname}

            
            /> */}



        </>
    )
}

export default CategoryCard