// import React from 'react';
// import Navbar from '../components/Navbar';
// import '../style/home.css'
// import Right_panel from '../components/Right_panel'
// import Sell_crops from '../components/Sell_crops';
// import { useHistory } from 'react-router-dom';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import News from '../components/Newsapi'

// function Home() {


//   return (
//     <>
//       <div className='home_div_main'>
//         <div className="home_ka_div">


//           <Navbar />
//           <Right_panel />

//           <div className='main_divv'>
//             {/* <h1>hello this is home page</h1> */}

//             <div className="newsdiv">
//             <h1 className='news_heading'>NEWS</h1>
//               <div className="newsholder">
//               {/* <h1 className='news_heading'>NEWS</h1> */}
//                 <News />

//               </div>


//             </div>
//           </div>


//         </div>
//       </div>
//     </>
//   )
// }

// export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import Nav from '../components/Nav';
import '../style/home.css'
import Right_panel from '../components/Right_panel'
import Sell_crops from '../components/Sell_crops';
import { useHistory } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import News from '../components/Newsapi'
import Newsapi from '../components/Newsapi';

function Home() {


  return (
    <>

      <div className='home_div_main'>
        <div className="home_nav_div">


          <Nav />
          <div className='main_divv'>

            <Right_panel />
            <div className='himg'>
              <div className='krishi_para_main'>
                <div className='krishi_para'>
                  <h1>We ARE KRISHI</h1><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit culpa corrupti laudantium neque dolorem molestiae ea dolores obcaecati quis? Corporis veniam sint minus omnis tempora sed nesciunt vero magni quidem id. Laudantium ipsum cum illum, saepe tenetur, consequatur cupiditate soluta assumenda voluptas quaerat ea magni quae ut, quia mollitia!

                </div>
              </div>
              {/* <img src={require('../images/7.jpg')} alt="img here" /> */}
                <img alt="hero" src="https://source.unsplash.com/200x200/?farmer,crop" />
          
              {/* <img alt="hero" src="https://source.unsplash.com/500x300/?farmer,crop" /> */}
              {/* <img alt="hero" src="https://source.unsplash.com/600x400/?fruit" /> */}
              <div className="newsdiv">
                <div className="newsholder">
                  {/* <News /> */}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;



