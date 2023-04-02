import React from 'react'
import './Subscribe.css'
import img from '../../assets/subscribe-bg.png'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'


const Subscribe = () => {
  return (
    <div id='subscribe'>
      <h1>SUBSCRIBE NOW!</h1>
      <div className="input">
        <input type="text" placeholder='Enter your Email...' id="" />
        <button>Subscribe</button>
      </div>
      <div className="social-icons">
        <div className="social-icon"> <BsFacebook size={30}/> </div>
        <div className="social-icon"><BsTwitter size={30}/></div>
        <div className="social-icon"><AiFillInstagram size={30}/></div>
      </div>
        
    </div>
  )
}

export default Subscribe