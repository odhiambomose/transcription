import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div>
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
