import React from 'react'
import {BsFillStarFill} from 'react-icons/bs';
import './Faq.css'
import Question from './Question';
import { questions } from './Data';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Faq = () => {
  return (
    <section id='faq'>
        <div className="title"data-aos="fade-up">
         <BsFillStarFill size={35} color='red'/>
         <h2>FAQS</h2>


        </div>
        <div className=" container-questions ctn">
          {questions.map(question =>{
            // const {title,answer} = question
             return <Question id={question.id} title= {question.title} answer={question.answer}/>
          })}

          
        </div>
    </section>
  )
}

export default Faq