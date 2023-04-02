// import React, {useEffect} from 'react'
import './Header.css'
import phoneHeader from '../../assets/phone-header-bg.png'
import {BsMouse} from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Header = () => {
  useEffect(()  =>{
    AOS.init({
      duration:1000,
  });
  },[])
  return (
    <section id='header'>
        <div className="container ">
          <div className="header-left" data-aos="fade-right">
            <h1 className='header'>THE WORLD'S LEADING</h1>
            <h3>CROSS PLATFORM SECURE MESSAGING SYSTEM</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eaque alias nihil culpa molestias fuga sed officiis
              commodi iusto voluptate corrupti.
            </p>
            <div className="header-btn">
              <button className="left"> Get Started</button>
              <button className="right">How it works</button>
            </div>
            
          </div>
          <div className="header-right"data-aos="fade-left">
            <img src={phoneHeader} alt="" />
          </div>

        </div>
        <div className="floating-icon">
          <a href="#features">
            <BsMouse color='black' size={25} className='mouse'/>
          </a>
        </div>
    </section>
  )
}

export default Header