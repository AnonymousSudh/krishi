import React, { useState } from 'react';

import { useNavigate, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
require("../style/login.css")
// require("")


const Login = () => {

    const [login_email, setemail] = useState("");
    const [login_password, setpassword] = useState("");

    const history = useHistory();



    const responseGoogle = async (response) => {
        // console.log("this is response");
        // console.log(response.profileObj.imageUrl);
        localStorage.setItem("profie_pic_url", response.profileObj.imageUrl)

        const res = await fetch("/signInWithGmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                response
            })
        });

        if (res.status == 203) {

            history.push("/Enter_details");
        }
        if (res.status == 205) {

            history.push("/adminpanel");
            const data = await res.json();
            console.log(data);
            localStorage.setItem("adminid", data)
        }
        if (res.status == 201) {
            history.push('/home') 
        }
        // console.log("this is userid at login.jsx line 34" );
        // console.log(res.status);
        const data = await res.json();
        console.log(data);
        localStorage.setItem("userid", data)


        console.log(`this is a response when google login happen ${res.status}`);
       
    }











    const login_user = async (event) => {
        // const {login_email,login_password} = login
        try {
            const res = await fetch("/signin", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    login_email, login_password
                })


            });
            const userid = res.json()
            console.log(userid);

            if (res.status == 200) {
                // i think the below /home directory is that one which is present in login -> Home
                history.push("/home")
            }

            if (res.status == 400) {
                alert("Data not found")
            }
            if (res.status == 402) {
                alert("please fill the data ")
            }
            // if (res.status == 404) {
            //     alert("please fill the data ")
            // }

        } catch (error) {
            console.log(error);

        }

    }

    const open_signup = () => {
        history.push('./signup_email')
    }


    return (
        <>


            <div className='main-head'>
                <div className="login-boxlog">
                    <div className="leftlog">
                        <img className='logo' src={require('../images/logo2.png')} alt="Logo" width="180" height="120" />
                        <h1 className='header2'>Welcome to Krishi</h1>

                        <input type="text" name="username" placeholder="Email" value={login_email} onChange={(e) => setemail(e.target.value)} />



                        <input type="password" name="password" placeholder="Password" vlaue={login_password} onChange={(e) => {
                            setpassword(e.target.value)
                            console.log(login_password);
                        }} />

                        <button className='log_submit' onClick={login_user}>login</button>

                        <p className='Or_log'>--------or--------</p>
                        <GoogleLogin className='google'
                            // clientId= {process.env.GOOGLE_CLIENT_ID}
                            clientId="897223443783-1bqmg4ifk0id3mvenq5vccpp3b0mhmm1.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                    </div>

                    <div className="rightlog">
                        <div className='newacc' style={{ color: '#228B22' }}>
                            <br />Are You New to <span style={{ color: '#32CD32' }}><br />Krishi?</span>
                            <br /><button className='newaccbt' onClick={open_signup}>Create Account</button>

                        </div>

                    </div>

                </div>
            </div>

            {/* 

        <div className="main_container">
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
                        <GoogleLogin
                            clientId="897223443783-1bqmg4ifk0id3mvenq5vccpp3b0mhmm1.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> */}




            {/* <form action="post">
                            <input type="text" name="name"  id="name" value={user.name} onChange={typevalue} placeholder="Name" required/><br />

                            <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />

                            <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />
                            
                            <input type="number" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />
                            
                            <input type="text" name="address" id="address" value={user.address} onChange={typevalue} placeholder="address" />
                            <br />
                            <button onClick={send_data}> signup</button>

                        </form> */}
            {/* 
                    </div>


                </div>
            </div>
            <div className="nd_page">
                <div className="main_container2">
                    <div className="sign_in">
                        <div className="item3">
                            <h1>Sign in </h1>
                            <input type="email" name="login_email" value={login_email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />

                            <input type="password" name="login_password" value={login_password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                            <br /><br />
                            <button onClick={login_user}>sign in </button>
                        </div>
                    </div>

                    <div className="hlo_friend">
                        <div className="item4">
                            <h1>Hello friend</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptatem facere quos?
                            </p>

                            <button onClick={opacity2}>sign up</button>


                        </div>
                    </div>
                </div>
            </div>

        </div> */}
        </>
    );
}

export default Login;
