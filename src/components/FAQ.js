import React, { useState } from 'react';
import './styles/FAQ.css';

import data from '../data.json';
import arrow from '../assets/images/icon-arrow-down.svg';

const FAQ = () => {
    const [ condition, setCondition ] = useState({ active: false, id: [] });

    const handleClick = event => {
        const faq = document.querySelector('.faq');
        const item = faq.childNodes[event.target.id];
        const question = item.querySelector('.faq__question');
        //event.target.id

        if(condition.active) {
            setCondition({
                active: false,
                id: []
            });
            question.classList.remove('active');
        } else if(!condition.active) {
            setCondition({
                active: true,
                id: event.target.id
            });
            question.classList.add('active');
        }
    }

    return (
        <ul className="faq">
            { data.map( data => {
                return (
                    <li id={data.id} key={data.id} className="faq__item" onClick={handleClick}>
                        <h2 className="faq__question" onClick={handleClick}>{data.question}<img className="faq__icon" src={arrow} alt="arrow icon to show the answer"/></h2>
                        {(condition.active && condition.id.includes(data.id)) && <p className="faq__answer">{data.answer}</p>}
                    </li>
                )})
            }
        </ul>
    );
}

export default FAQ;