import React from 'react'
import {BsHexagon} from 'react-icons/bs';
import './Feature.css'
import {featureList} from './Data.js'
import { BsPentagon } from "react-icons/bs";
import { BsHeptagon } from "react-icons/bs";
import { BsOctagon } from "react-icons/bs";



const feature = () => {
  return (
    <>
    {
        featureList.map(feature=>{
            const {id, icon, heading, text} = feature;
            return (
                <div key={id}className='feature'>
        <div className="feature-icon">
            <p>{icon}</p>

           
        </div>
        <div className="feature-text">
            <h3> {heading}</h3>
            <p> {text}  </p>
        </div>
    </div>

            )
        })
    }
    
    </>
  )
}

export default feature