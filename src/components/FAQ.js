import React, { useState } from 'react';
import './styles/FAQ.css';

import data from '../data.json';
import arrow from '../assets/images/icon-arrow-down.svg';


const FAQ = () => {
    const [ active, setActive ] = useState(false);

    const activation = () => {
        const question = document.querySelector('.faq__question');
        if(active) {
            question.className = 'faq__question'
        } else if(!active) {
            question.className += ' active';
        }
    }

    const handleClick = event => {
        if(active) {
            setActive(false);
            activation();
        } else if(!active) {
            setActive(true);
            activation();
        }
    }

    return (
        <div className="faq">
            { data.map( (data, i) => {
                return (
                    <div key={i} className="faq__item" onClick={handleClick}>
                        <h2 className="faq__question">{data.question}<img className="faq__icon" src={arrow} alt="arrow icon to show the answer"/></h2>
                        {active && <p className="faq__answer">{data.answer}</p>}
                    </div>
                )})
            }
        </div>
    );
}

export default FAQ;