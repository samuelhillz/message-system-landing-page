import react from 'react';
import './Question.css';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import { useState } from 'react';
import { questions } from './Data';

const Question = ({title,answer}) => {
    const [show,setShow] = useState(false);
    
    const handleClick = () => {
        setShow(!show)

    }
    
  return (
    
        <div className='questions'>
            <div className="question-wrap">
                <div className="question">
                    <h2>{title}</h2>
                     <button  onClick={handleClick}>
                     {
                     show ? (<AiOutlineMinus color='red' size={50}/>) : (<AiOutlinePlus color='#1f931ff' size={50}/>)
                     }</button> 
                
                </div>
                {show && <p>{answer}
                    </p> }                              
                       
            </div>             
               
        
        </div>
        
        
    
  )
}

export default Question