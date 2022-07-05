import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsCard from './card/NewsCard';
require('../style/newsapi.css')


function Newsapi() {

    const [news, setnews] = useState([]);

    const fetchNews = async () => {

        const url2 = `https://newsapi.org/v2/everything?q=agriculture&sortBy=popularity&apiKey=870ca578389942988efdd66eb6b53c42`

        // console.log("0");
        const data = await fetch(url2);
        // console.log("1");
        const json_data = await data.json();

        var array = []
        const filterdata = json_data.articles.filter((elem, index) => {
            // console.log(elem.title);
            const string = elem.title
            const result = string.includes("India's")
            const result2 = string.includes("India")
            // console.log(result);
            if (result == true || result2 == true) {
                array.push(elem)
            }
        })
        console.log("3");
        console.log(array);
        setnews(array)

    }

    useEffect(() => {
        fetchNews();

    }, [])

    return (
        <>
            {news.map((val) => {
                return (
                    <>
                        <div className="newscard">

                            <div className="newscardholder">

                                <div className="newsimg">
                                    {/* <img src={val.urlToImage} alt="image" /> */}
                                </div>
                                <h1>{val.title}</h1>
                                <hr />
                                <div className='news_disc'>
                                    <h2>{val.description}</h2>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}


        </>
    )
}

export default Newsapi