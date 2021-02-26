import React from 'react';
import './styles/FAQ.css';

import data from '../data.json';
import arrow from '../assets/images/icon-arrow-down.svg';

const FAQ = () => {
    return (
        <div className="faq">
            { data.map( (data, i) => {
                return (
                    <div key={i} className="faq__item">
                        <h2 className="faq__question">{data.question}<img className="faq__icon" src={arrow} alt="arrow icon to show the answer"/></h2>
                        {false && <p className="faq__answer">{data.answer}</p>}
                    </div>
                )})
            }
        </div>
    );
}

export default FAQ;