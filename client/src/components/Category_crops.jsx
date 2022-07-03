import '../style/category_crops.css'
import Navbar from './Navbar';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';

const Category_crops = () => {

    const [category, setCategory] = useState([]);


    const fetchCategory = async () => {

        const getcategory = await fetch("/getcategory", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"

            },
            Credential: "include"

        })
        console.log("1");
        console.log(getcategory);
        const result = await getcategory.json()
        console.log("2");
        console.log(result);

        console.log("3");

        // setCategory(result=>{
        //     return [...result]

        // })
        setCategory(result)
        console.log("4");
        console.log(category);
        console.log("5");

    }
    const log = () => {
        console.log(category);
    }

    useEffect(() => {
        fetchCategory();
    }, [])

    return (
        <>
            <Navbar />
            <div className='category_header'>
                <div className='category_main'>
                    {/* <button onClick={log}> ffgfdhfhg</button> */}
                    <h1 className='category_head'>SELECT A PRODUCT TO BUY</h1>
                    <div className="category_holder">



                        {category.map((val) => {
                            return (
                                <>
                                    {/* <h1>hello</h1> */}
                                    <CategoryCard

                                        categoryname={val}

                                    />
                                </>
                            )
                        })}
                    </div>
                    <div className='line'></div>
                    <p className='talk'>Can't find a product you are looking for?</p>
                    <button className='button_talk'>Talk to us</button>
                </div>

            </div>
        </>
    )
}
export default Category_crops;