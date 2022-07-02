import React, { useEffect, useState } from 'react'
// import router from '../../../server/router/sellauth'
import '../style/buy_crop.css'
import Card from '../components/Card'


const Buy_crops = () => {

  const [data, setdata] = useState([]);

  const getallselldata = async () => {

    const res = await fetch('/getAllBuyingData', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"

      },
      Credential: "include"

    })
    const data = await res.json()
    setdata(data);
    console.log(data);
  }

  useEffect(() => {
    getallselldata();

  }, [])


  return (
    <>

      <div className='showDataa'>
        <div className="tabledata">

      


            {data.map((val) => {
              return (
                <> 
                  <Card
                   cropname={val.crop_name_id.crop_namee} 
                   varietyname={val.variety_id}
                   quantity={val.quantity}
                   price={val.price}
                   sellername={val.seller_id.name}
                   sellerphoneno={val.seller_id.phoneno}
                   selleremail={val.seller_id.email}
                  
                   
                   />
                  {/* <div className='buy_card'> */}

                  {/* <tr>
                        <td>{val.crop_name_id.crop_namee}</td>
                        <td>{val.variety_id}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        <td>{val.seller_id.name}</td>
                        <td>{val.seller_id.phoneno}</td>
                        <td>{val.seller_id.email}</td>
                      </tr> */}
                  {/* </div> */}
                </>
              )

            })}



        </div>
      </div>
    </>
  )
}

export default Buy_crops


