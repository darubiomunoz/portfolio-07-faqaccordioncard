import React, { useState, useEffect } from 'react';
import './styles/Question.css';

import data from '../data.json';
import arrow from '../assets/images/icon-arrow-down.svg';

const QuestionLogic = () => {
    const [ active, setActive ] = useState(false);
    const [ id, setId ] = useState([]);

    const handleClick = event => {
        const number = event.target.id;
        const index = id.indexOf(number);

        const faq = document.querySelector('.faq');
        const item = faq.childNodes[number];
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');

        const addActiveClassName = () => question.classList.add('active');
        const removeActiveClassName = () => question.classList.remove('active');
        const addInvisibleClassName = () => answer.classList.add('invisible');
        const removeInvisibleClassName = () => answer.classList.remove('invisible');

        if(!active) {
            setActive(true);
            setId([ id, number ]);
            addActiveClassName();
            removeInvisibleClassName();
        }

        if(active && !id.includes(number)) {
            setId( [ id, number ]);
            addActiveClassName();
            removeInvisibleClassName();
        }

        if(active && id.includes(number) && id.length > 1) {
            /* id.splice(index, 1); */
            setId( () =>  id.splice(index, 1) );
            removeActiveClassName();
            addInvisibleClassName();
        }

        if(active && id.includes(number) && id.length === 1) {
            setActive(false);
            /* id.splice(index, 1); */
            setId( () =>  id.splice(index, 1) );
            removeActiveClassName();
            addInvisibleClassName();
        }
    }

    useEffect( (event) => {
        console.log('You can do it');
    }, [id] );

    return { active, id, handleClick}
}

const Question = () => {
    const { handleClick } = QuestionLogic();

    return (
        <React.Fragment>
            {
                data.map( data => {
                    return (
                        <li key={data.id} className="faq__item">
                            <h2 id={data.id} className="faq__question" onClick={handleClick}>{data.question}<img id={data.id} className="faq__icon" src={arrow} alt="arrow icon to show the answer"/></h2>
                            <p className="faq__answer invisible">{data.answer}</p>
                        </li>
                    )}
                )
            }
        </React.Fragment>
    );
}

export default Question;