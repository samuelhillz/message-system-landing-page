import React from 'react'
import './Download.css'
import {AiFillAndroid} from 'react-icons/ai'
import {AiFillApple} from 'react-icons/ai'
import {AiFillWindows} from 'react-icons/ai'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Download = () => {
  return (
    <div>
       <div id='download' className="download" data-aos="fade-up">
        <h1>Social Messenger Download</h1>
        <hr />
        <p>Our app are available for download on all stores</p>
        <div className="download-btn">
          <button> <AiFillAndroid/> Android</button>
          <button><AiFillApple/> ios</button>
          <button><AiFillWindows/> Windows</button>
        </div>
       </div>
    </div>
  )

  }

export default Download;