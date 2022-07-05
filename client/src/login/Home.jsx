import React from 'react';
import Navbar from '../components/Navbar';
import '../style/home.css'
import Right_panel from '../components/Right_panel'
import Sell_crops from '../components/Sell_crops';
import { useHistory } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import News from '../components/Newsapi'

function Home() {


  return (
    <>
      <div className='home_div_main'>
        <div className="home_ka_div">


          <Navbar />
          <Right_panel />

          <div className='main_divv'>
            <h1>hello this is home page</h1>

            <div className="newsdiv">
              <div className="newsholder">
                <News />

              </div>


            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Home;
