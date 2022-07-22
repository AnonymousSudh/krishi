import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsCard from './card/NewsCard';
require('../style/newsapi.css')


function Newsapi() {

    const [news, setnews] = useState([]);

    const fetchNews = async () => {

        // const url2 = `https://gnews.io/api/v4/top-headlines?q=farmer&lang=en&token=41e3c847093004b495a310bc932a56eb`

        const url2 = `https://gnews.io/api/v4/top-headlines?q=farmer&lang=en&token=20a748200744dcd93bd28d07af2451e2`

        console.log("0");
        const data = await fetch(url2);
        console.log("1");
        const json_data = await data.json();
        console.log(json_data);

        // var array = []
        // const filterdata = json_data.articles.filter((elem, index) => {
        //     // console.log(elem.title);
        //     const string = elem.title
        //     const result = string.includes("India's")
        //     const result2 = string.includes("India")
        //     // console.log(result);
        //     if (result == true || result2 == true) {
        //         array.push(elem)
        //     }
        // })
        // console.log("3");
        // console.log(array);
        setnews(json_data.articles)

    }

    useEffect(() => {
        fetchNews();

    }, [])

    return (
        <>
            {/* <div className="news_card"> */}

                {news.map((val) => {
                    return (
                        <>
                            <div className="newscard">

                                <div className="newscardholder">

                                    <div className="newsimg">
                                        {/* {/* <img src={val.urlToImage} alt="image" /> */}
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
            {/* </div> */}


        </>
    )
}

export default Newsapi