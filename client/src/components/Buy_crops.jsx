import React, { useEffect, useState } from 'react'
// import router from '../../../server/router/sellauth'
import '../style/buy_crop.css'
import Card from '../components/Card'

const Buy_crops = () => {

  const [result, setResult] = useState([]);

  const getallselldata = async () => {

    const res = await fetch('/getAllBuyingData', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"

      },
      Credential: "include"

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


