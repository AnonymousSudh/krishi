import React, { useState } from 'react'
import { useEffect } from 'react';
// import router from '../../../server/router/auth';
import "../style/sell_crops.css"

function Sell_crops() {

  const [sell_data, set_sell_data] = useState({
    // crop_name: "", variety: "",
    price: "", quantity: ""
  });

  const [cropdata, setcropdata] = useState([]);
  const [cropid, setcropid] = useState([]);
  const [variety_data, setvariety_data] = useState([]);
  const [varietyid, setvarietyid] = useState([]);

  let nameee, valueee;
  const typevaluee = (event) => {
    // event.target will get that value and store in name/ value  variable
    nameee = event.target.name
    // console.log(event.target.name);
    valueee = event.target.value

    set_sell_data({ ...sell_data, [nameee]: valueee })


  }













  const submit_sell_details = async (event) => {
    event.preventDefault();



    const {price, quantity } = sell_data;
    const crop_id = localStorage.getItem("crop_id");
    console.log("hello");
    console.log(crop_id);
    const variety_id = localStorage.getItem("variety_id");
    

    const res = await fetch("/Sell_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_id,variety_id, price, quantity
      })
    });
    // console.log(res.status);

    if (res.status === 200) {
      // close_dialog_box();
      // document.getElementsByClassName("contact_form")[0].reset();
      // HTMLFormElement.reset()

      // document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.zIndex = "8";
      document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "none";
      alert('Data uploaded')
      // console.log(res.body);
    };

    if (res.status === 400) {
      alert("please fill all the data");
    }

  }

  const close_sell_form = () => {

    document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "none";
  }

  // const close_dialog_box = () => {
  //   document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "none";
  // }

  const fetchcropid = async () => {
    // console.log("hello dfdf");
    const res = await fetch('/fetch_crop_id', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      Credentials: "include"
    });
    var data = await res.json();
    // console.log(data[0]._id);
    // data.map((val)=>{
    //   console.log(val.crop_namee);
    // })

    setcropdata(data) // this data have cropid and crop name
    // console.log(cropdata);
    //  data.map((val)=>{
    //     console.log(val.crop_namee);
    //   });

  }
  

  const selectvariety = async () => {
    const cropname = document.getElementById('cropdata').value
    const result = cropdata.find( ({ crop_namee }) => crop_namee === cropname );

    // console.log(result._id);
    const cropid = result._id;
    localStorage.setItem("crop_id", result._id)


    const res = await fetch("/sendcropname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        cropname,cropid
      })
    });

    const varietydata = await res.json();
    // console.log("this is variety data");
    console.log(varietydata);
    setvariety_data(varietydata)



    const varietyname = await fetch('/getvarietyname', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }, 
      Credentials: "include"

    })
  }




  const getvarietyid =()=>{
    const varietyname = document.getElementById('variety_data').value
    // console.log(variety_data);
    console.log(varietyname);

    const dd=  variety_data.find(({variety}) =>variety === varietyname )
    console.log(dd._id);
    localStorage.setItem("variety_id",dd._id)
    
  }

  useEffect(() => {
    fetchcropid();
  }, [])

  return (
    <>
      <div className="main_div">
        <div className="form_holder_div">

          <div className='form_holder'>
            <button className='close_form_btn' onClick={close_sell_form}>cancel</button>
            <form action="POST" name="contact_form">
              <div className='input_fields'>
                <label htmlFor="crop name">Crop name :</label>
                {/* <input type="text" id='crop_name' name='crop_name' value={sell_data.crop_name} 
              onChange={typevaluee} /> */}
                <select name="cropdata" id="cropdata" onChange={selectvariety}>

                  {cropdata.map((val) => {
                    return (
                      <>
                        <option disabled hidden selected>select the crop name</option>
                        <option value={val.crop_namee}>{val.crop_namee}</option>
                      </>
                    )
                  })}

                </select>

              </div>

              <div className='input_fields'>
                <label htmlFor="variety">Variety :</label>
                {/* <input type="text" id='variety' name='variety' value={sell_data.variety} onChange={typevaluee} /> */}
                <select name="varietydata" id="variety_data" onChange={getvarietyid}>

                  {

                    variety_data.map((val) => {
                      return (
                        <>
                          <option disabled hidden selected >select variety name</option>
                          <option value={val.variety}>{val.variety}</option>

                        </>
                      )
                    })
                  }
                </select>
              </div>


              <div className='input_fields'>
                <label htmlFor="price">Price:</label>
                <input type="text" id='price' name='price' value={sell_data.price} onChange={typevaluee} />


              </div>

              <div className='input_fields'>
                <label htmlFor="quantity">quantity :</label>
                <input type="text" id='quantity' name='quantity' value={sell_data.quantity} onChange={typevaluee} />

                <select id="unit">
                  <option disabled selected hidden>select unit</option>
                  <option value="kg">kg</option>
                  <option value="ton">Ton</option>
                  <option value="man">Man</option>
                  {/* <option value="audi" selected>Audi</option> */}
                </select>

              </div>

              <button onClick={submit_sell_details}>submit</button>

            </form>
            {/* <button className='close_dialog_box' onClick={close_dialog_box}>close</button> */}
          </div>
        </div>
      </div>



    </>
  );

}

export default Sell_crops;