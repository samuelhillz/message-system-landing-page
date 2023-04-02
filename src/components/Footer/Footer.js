import React from 'react'
import './Footer.css'
import {AiFillPhone} from 'react-icons/ai'
import {FaAddressBook} from 'react-icons/fa'
import {FaFax} from 'react-icons/fa'
import {BsFillEnvelopeOpenFill} from 'react-icons/bs'
import {BsGlobe} from 'react-icons/bs'



const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="contact">
          <h2>Useful Links</h2>
          <ul>
            <li> Support</li>
            <li> Home</li>
            <li> About</li>
            <li> Learn</li>
            <li> Messenger</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Business</h2>
          <ul>
            <li> Power platform</li>
            <li> Marketplace</li>
            <li> App store</li>
            <li> Learn</li>
            <li> Messenger</li>
            <li> Visual studio</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Developer & IT</h2>
          <ul>
            <li> Azure</li>
            <li> Developer center</li>
            <li> Documentation</li>
            <li> Learn</li>
            <li> Messenger</li>
            <li> Tech community</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Company</h2>
          <ul>
            <li> Carrers</li>
            <li> About Hillary</li>
            <li> News</li>
            <li> Learn</li>
            <li> Privacy</li>
            <li> Sustainability</li>
            <li> Diversity</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright© 2023  All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer