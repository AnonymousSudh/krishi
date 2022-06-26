import React from 'react'
import '../style/Contact.css'
import Navbar from '../components/Navbar';

function ContactUs() {
  return (
    <>
      <Navbar />
      {/* <div className="trial"> */}

        <div className="cbody-head">
          <div className="clogin-box">

            <div className="cleft">

              <p className='cleft_p' style={{ color: '#16a085' }}>Hello,lets get in touch</p>

              <input type="text" name="username" placeholder="Username" />

              <input type="text" name="number" placeholder="enter 10 digit mobile no." />
              <input type="text" name="email" placeholder="E-mail" />
              <input type="text" name="text1" placeholder="Reason for contact" />
              <input type="text" name="text2" placeholder="Meassage" />

              <input type="submit" name="signup_submit" value="Send message" />
            </div>

            <div className="cright">
              <h1 className="cright-box">We'd love to <h1 className='hear'> Hear <span style={{ color: 'rgb(154, 231, 154)' }}>from you </span></h1>
                <p className="cright-box1">krishi@gmail.com</p></h1>
              {/* <p className="cright-box2">prefered method for communication <br /><br />
              <input type="radio" id="phone" name="language" value="Phone" />
              <label className="cphone" for="phone">Phone</label>
              <input type="radio" id="e-mail" name="language" value="E-mail" />
              <label className="cemail" for="e-mail">E-mail</label><br></br>
            </p> */}

            </div>

          </div>
        </div>
      {/* </div> */}

    </>
  )
}

export default ContactUs