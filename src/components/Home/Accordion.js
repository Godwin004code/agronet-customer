
import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp} from "react-icons/fa"
import './Accordion.scss'

const Accordion = () => {
    const accordionData = [
        {
            id: 1,
            question: 'What is Agronet about?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam consectetur rem nobis, unde eos aperiam non. Impedit beatae tempora provident, cum tenetur sequi temporibus aperiam, dolores autem cumque eos.'
        },
        {
            id: 2,
            question: 'Will I have to pay for delivery?',
            answer: 'Yes, you will pay for delivery. We have partnered with delivery agencies to make sure our customers pay affordable delivery fee.'
        },
        {
            id: 3,
            question: 'Is my money safe on the website?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam consectetur rem nobis, unde eos aperiam non. Impedit beatae tempora provident, cum tenetur sequi temporibus aperiam, dolores autem cumque eos.'
        },
        {
            id: 4,
            question: 'Can I reach you if I have a problem?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam consectetur rem nobis, unde eos aperiam non. Impedit beatae tempora provident, cum tenetur sequi temporibus aperiam, dolores autem cumque eos.'
        }
    ]
    const [Data, setData] = useState(accordionData)
    
    const [clicked, setClicked] = useState(null)

    const handleClick = (val) => {
        
        if(val === clicked) {
            return setClicked(null)
        }

        setClicked(val)
    }
    
  return (
    <section className='accordion-container'>
    <div className='accordion-container-text'>
            <h2>You have questions?  We have answers.</h2>
        </div>
        <div className='accordion-container-answer'>
            {
                Data.map((item, index) => {
                    return (
                        <div className='accordion-border-line' key={item.id}>
                        <section onClick={() => handleClick(index)} className='accordion-header'>
                            <h2>{item.question}</h2>
                            <div className='arrows'>
                              {clicked === index ? <FaChevronUp /> : <FaChevronDown />}    
                            </div>
                        </section>
                        <div className='answer'>
                            {
                                clicked === index ? <p>{item.answer}</p> : ''
                            }
                        </div>
                        </div>
                    )
                })
            }
            
        </div>
        </section>
  )
}

export default Accordion