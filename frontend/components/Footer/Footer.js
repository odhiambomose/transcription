import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Image from "next/image";
import img22 from "../../public/images/logo.png"
const Footer = () => {
  return (
    <div>
<div>
<Image src={img22} width={"30px"} height={"40px"}/>

</div>



      <div>
          <ul>
              <li>Timestamps</li>
              <li>Export</li>
              <li>Settings</li>
              <li>Forum</li>
          </ul>
      </div>

      <div>
          <h2>Contact</h2>
          <ul>
              <div>
              <LocalPhoneIcon/>
              <li>+254778185676</li>
              </div>
              <div>
                  <EmailIcon/>
              <li>Email</li>
              </div>
              <div>
                  <button>Contact Us</button>
              </div>
          </ul>
      </div>
    </div>
  )
}

export default Footer
