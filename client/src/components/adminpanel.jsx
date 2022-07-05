import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
require('../style/adminpanel.css')
// impor useHistory

function Adminpanel() {

  const [crop_Name, set_crop_name] = useState("");
  const [variety_Name, set_variety_name] = useState("");
  const [category_Name, set_category_name] = useState("");
  const [message, setMessage] = useState([]);

  const history = useHistory();

  const submit_sell_details = async (event) => {
    event.preventDefault();
    // console.log(crop_namee);
    // console.log(variety_name);

    const uploadcrop = await fetch("/uploadcrop", {  //at admin.js
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_Name, category_Name, variety_Name
      })
    });

    // console.log(uploadcrop.status);
    if (uploadcrop.status == 401) {
      alert("Already uploaded");
    }
    if (uploadcrop.status == 200) {
      // alert("Already uploaded");
      alert("Crop Uploaded");
    }
    if (uploadcrop.status == 402) {
      alert("fill all data")
    }








  }

  const logout = () => {
    // localStorage.removeItem("profie_pic_url")
    // localStorage.removeItem("city")
    // history.push("/");

  }


  const showMessage = async () => {
    const res = await fetch('/showmsg', {  // at admin

      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      Credentials: "include"
    });

    const result = await res.json();
    // console.log(data);

    // const msglist = 
    setMessage(result);
    console.log(result);






  }

  useEffect(() => {
    showMessage();
  },[])

  return (
    <>

      <div>adminpanel</div>

      <div>

        <form action="POST" name="contact_form">



          <div className='input_fields'>
            <label htmlFor="crop name">Select Caterogy</label>
            <input type="text" id='category_name' name='caterogy_name' value={category_Name}
              // onChange={(e) => setphoneno(e.target.value)}
              onChange={(e) => { set_category_name(e.target.value) }} />
          </div>


          <div className='input_fields'>
            <label htmlFor="crop name">Crop name :</label>
            <input type="text" id='crop_name' name='crop_name' value={crop_Name}
              // onChange={(e) => setphoneno(e.target.value)}
              onChange={(e) => { set_crop_name(e.target.value) }} />
          </div>

          <div className='input_fields'>
            <label htmlFor="variety">Variety :</label>
            <input type="text" id='variety' name='variety' value={variety_Name} onChange={(e) => { set_variety_name(e.target.value) }} />
          </div>



          <button onClick={submit_sell_details}>submit</button>

        </form>
      </div>
      <NavLink exact to="./logout"><button className="logout">logout</button></NavLink>


      <div className="message">
        {message.map((val) => {
          // console.log(val.message);
          return(

            <> 
             <div className="msg_container"> 
               <h1>{val.reason}</h1>
               <h2>{val.message}</h2> 

             </div> 
           </> 
            )
         } 

         )} 




      </div>
    </>

  )
}

export default Adminpanel