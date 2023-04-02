import React from 'react'
import './Features.css'
import {BsFillStarFill} from 'react-icons/bs'
import {IoIosBrowsers} from 'react-icons/io'
import Img from '../../assets/phone-features.png'
import Feature from './Feature'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Features = () => {
  return (
    <section id='features'>
      <div className="main">
        <div className="title">
         <BsFillStarFill size={35} color='red'/>
         <h2>Core Features</h2>
        


        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={Img} alt="" />

          </div>
          <div className="features-right" data-aos="fade-left">
                          
                <Feature />
            
            

          </div>
        </div>

      </div>
    

      
        

    </section>
   
  )
}

export default Features