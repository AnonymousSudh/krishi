import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from "../components/Loading";
require("../style/signup.css")
// import useState from 
// const nodemailer = require("nodemailer");

function Signup() {


    // const [time, settime] = useState("yes");
    const [user, setuser] = useState({
        name: "", email: "", password: "", phoneno: "", address: ""
    });
    const [otp, setotp] = useState("");

    const history = useHistory();
    const { name, email, password, phoneno, address } = user;


    // const typevalue=(e)=>{
    //     console.log(e.target.value);
    //     setuser([address]:e.target.value)

    // }


    const typevalue = (event) => {
        let namee, value;

        // event.target will get that value and store in name/ value  variable
        namee = event.target.name
        value = event.target.value

        setuser({ ...user, [namee]: value })
    }



    const send_data = async (event) => {
        event.preventDefault();

        // setTimeout(() => {
        //     // settime("yes")
        //     // console.log(time);
        //     // document.getElementsByClassName('main')[0].style.display = "block"
        //     document.getElementsByClassName('main_div_loading')[0].style.display = "none"
        //     console.log("hello i am inside settimeout");
        // }, 5000);

        // document.getElementsByClassName('')

        document.getElementsByClassName('main')[0].style.display = "none"
        document.getElementsByClassName('main_div_loading')[0].style.display = "block"


        const res = await fetch("/signup_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                name, email, password, address, phoneno
            })
        });
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        // localStorage.setItem('address', password)


        console.log(res.status);

        if (res.status == 400) {
            alert("enter all the details")
        }

        if (res.status == 422) {
            alert("email already exist ")
        }
        // if(res.status ===401){
        //     alert("emial is wrong");
        //     document.getElementsByClassName('main')[0].style.display = "block"
        //     document.getElementsByClassName('main_div_loading')[0].style.display = "none"
        // }

        if ( res.status === 201) {
            // console.log(time);
            // document.getElementsByClassName('loading')[0].style.display = "block"

            history.push("./enterotp");


        }
    }

    const trial = () => {
        alert("hello");
    }

    // const validate_data = async (event) => {
    //     event.preventDefault();
    //     const res = await fetch("/validate_data", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"

    //         },
    //         body: JSON.stringify({
    //             otp
    //         })
    //     });
    //     if (res.status == 201) {
    //         alert("you have been succesfully login");
    //     }
    //     if (res.status == 401) {
    //         alert("wrong otp")
    //     }
    // }



    return (
        <>
            <div className='main'>
                <div className='main_header'>
                    <div className="login_box">
                        <div className="left">

                            <h1 className='header1'>Sign up</h1>

                            <form action="post" onLoad={trial}>
                                <input type="text" name="name" id="name" value={user.name} onChange={typevalue} placeholder="Name" required /><br />

                                <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />

                                {/* <input type="number" name="otp" id="otp" value={otp} onChange={(e) => { setotp(e.target.value) }} placeholder="otp" /><br /> */}

                                <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />

                                <input type="text" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />

                                <input type="text" name="address" id="address" value={user.address} onChange={typevalue} placeholder="Address" />
                                <br />
                                <button className='submit' onClick={send_data} > sign up</button>
                                {/* <button onClick={validate_data}> send otp </button> */}



                            </form>
                        </div>

                        <div className="right">
                            <span className="loginwith">Sign in with</span>




                            <button className="social_signin google">Log in with Google+</button>
                        </div>
                        <div className="or">OR</div>
                    </div>
                </div>
            </div>

            <Loading />


        </>
    )
}

export default Signup;





































{/*     
              <div className='st_page'>
                <div className="welcome_back">
                    <div className="item">
                        <h1>welcome Back</h1>
                        <p>if you already have aacount please <br></br>
                            login keep connectd with us
                        </p>

                        <button onClick={opacity1}>sign in</button>
                    </div>
                </div>

                <div className="sign_up">
                    <div className="item2">

                        <h1>create account </h1>
                        <form action="post">
                            <input type="text" name="name" id="name" value={user.name} onChange={typevalue} placeholder="Name" /><br />
                            <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />
                            <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />
                            <input type="number" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />
                            <br />
                            <button onClick={send_data}> signup</button>

                        </form>

                    </div>


                </div>
            </div> */}

// </>;
// }

// export default Signup;
