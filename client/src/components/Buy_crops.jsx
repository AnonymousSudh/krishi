import React, { useEffect, useState } from 'react'
// import router from '../../../server/router/sellauth'
import '../style/buy_crop.css'
import Card from '../components/Card'

const Buy_crops = () => {

  const [result, setResult] = useState([]);

  const getallselldata = async () => {

    const category_id = localStorage.getItem("buy_category_id")

    const res = await fetch('/getAllBuyingData', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"

          // "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category_id
      })

  })
    const allSellList = await res.json();
    setResult(allSellList)
    // console.log(resu);
    console.log(allSellList);

  }

  useEffect(() => {
    getallselldata();

  }, [])


  return (
    <>

      <div className='showDataa'>
        <div className="tabledata">


          {/* {console.log(result)} */}

          {result.map((val) => {
            return (
              <>
                <Card
                  cropname={val.crop_name_id.crop}
                  varietyname={val.variety}
                  quantity={val.quantity}
                  price={val.price}
                  sellername={val.seller_id.name}
                  sellerphoneno={val.seller_id.phoneno}
                  selleremail={val.seller_id.email}
                  unit={val.unit}

                />

              </>
            )

          })}



        </div>
      </div>
    </>
  )
}

export default Buy_crops


