import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "../style/about.css";
import { useHistory, NavLink } from 'react-router-dom';



// import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap')
const About = () => {
    console.log("this is about page");
    // console.log(req);

    const history = useHistory();

    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {


        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log("this is data at about us");
            // console.log(data)
            setUserData(data);

            // console.log(userData.name);


            if (!res.status === 200) {
                const error = new Error(res.error);
                console.log(error);
            }

        } catch (err) {
            console.log(err);
            history.push('/home')
        }

    }


    useEffect(() => {
        callAboutPage();
    }, []);



    return (
        <>
            <Navbar />
            <div className="main_div_about">
                <div className="main_container_about">
                    <div className="img_div_about">

                        <div className="img_container">

                            <img src={userData.imageuri} alt="hello" />

                            <div className="name_div_info">
                                {/* <h2>Name</h2> */}
                                <h3 className='name'>{userData.name}</h3>
                                {/* <hr style="height:30px"/> */}
                            </div>
                        </div>

                    </div>

                    <div className="info_div">

                        <div className="default_heading">

                            <div className="email_heading">
                                <h3 className='email'>Email</h3>
                            </div>

                            <div className="phone_heading">
                                <h3 className='phone'>Phone</h3>
                            </div>
                            <div className="usertype_heading">
                                <h3 className='gender'>Usertype</h3>
                            </div>


                        </div>

                        {/* <div className="email"> */}

                        <div className="value">


                            <div className="email_address_div">
                                <h3 className='email_holder'>{userData.email}</h3>
                            </div>
                            {/* </div> */}

                            {/* <div className="phone"> */}

                            <div className="phone_no_div">
                                <h3 className='phone_holder'>{userData.phoneno}</h3>
                                {/* </div> */}
                            </div>

                            <div className="usertype">
                                <div className="show_usertype_div">
                                    <h3 className='usertye_holder'>{userData.usertype}</h3>
                                </div>
                            </div>


                            <div className="logout">
                                <NavLink exact to="./logout"><button className="logout">logout</button></NavLink>
                            </div>
                        </div>

                    </div>

                        <div className="cropDataList">
                            <NavLink exact to='./YourCrops'><button >Your crop</button></NavLink>

                        </div>
                </div>
            </div>

        </>)
}

export default About;
