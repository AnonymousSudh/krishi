import React from 'react'
import { useState } from 'react';
import { useHistory,NavLink } from 'react-router-dom';
// impor useHistory

function Adminpanel() {

  const [crop_Name, set_crop_name] = useState("");
  const [variety_Name, set_variety_name] = useState("");
  const [category_Name, set_category_name] = useState("");

  const history = useHistory();

  const submit_sell_details = async (event) => {
    event.preventDefault();
    // console.log(crop_namee);
    // console.log(variety_name);
 
    const uploadcrop = await fetch("/uploadcrop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_Name, category_Name, variety_Name
      })
    });
    // console.log("hello");
    // console.log(uploadcrop.status);
    if (uploadcrop.status == 401) {
      alert("Already uploaded");
    }


  }

  const logout = () => {
    // localStorage.removeItem("profie_pic_url")
    // localStorage.removeItem("city")
    // history.push("/");

  }

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

    </>

  )
}

export default Adminpanel