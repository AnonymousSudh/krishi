import '../style/category_crops.css'
import Navbar from './Navbar';
import CategoryCard from './CategoryCard';
import VarietyCard from './card/VarietyCard';
import { useEffect, useState } from 'react';

const Category_crops = () => {

    const [category, setCategory] = useState([]);
    const [variety, setVariety] = useState([]);


    const fetchCategory = async () => {

        const getcategory = await fetch("/getcategory", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"

            },
            Credential: "include"

        })

        console.log(getcategory);
        const result = await getcategory.json()

        console.log(result);


        // setCategory(result=>{
        //     return [...result]

        // })
        setCategory(result)

        console.log(category);


    }
    const log = () => {
        console.log(category);
    }

    const showcrop = async () => {

        // alert("hello")
        const category_id = localStorage.getItem("buy_variety_id")

        const getCrop = await fetch("/getCropForBuy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                category_id
            })
        });

        const data = await getCrop.json()
        console.log(data);
        setVariety(data)

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

                                    <button className='categoryBtn' onClick={showcrop}>

                                        <CategoryCard

                                            categoryname={val.category_Name}
                                            _id={val._id}

                                        />
                                    </button>
                                </>
                            )
                        })}
                    </div>
                    <div className='line'></div>

                    <div className="cropholder">
                        {variety.map((val) => {
                            return (
                                <>
                                    <VarietyCard
                                        varietyName={val.name}
                                    />

                                </>
                            )
                        })}



                    </div>
                    <p className='talk'>Can't find a product you are looking for?</p>



                    <button className='button_talk'>Talk to us</button>
                </div>

            </div>
        </>
    )
}
export default Category_crops;