import React, { useState } from 'react';
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
        const icon = item.querySelector('.faq__icon')

        const addActiveClassName = () => question.classList.add('active');
        const removeActiveClassName = () => question.classList.remove('active');
        const addInvisibleClassName = () => answer.classList.add('invisible');
        const removeInvisibleClassName = () => answer.classList.remove('invisible');
        const addRotateClassName = () => icon.classList.add('rotate');
        const removeRotateClassName = () => icon.classList.remove('rotate');
        const setAriaLabelMessageInactive = () => icon.setAttribute('aria-label', 'Press enter to show answer');
        const setAriaLabelMessageActive = () => icon.setAttribute('aria-label', 'Press enter to hide answer');
        const addTabindexAttr = () => answer.setAttribute('tabindex', '0');
        const removeTabindexAttr = () => answer.removeAttribute('tabindex');

        if(!active) {
            setActive(true);
            setId([number]);
            addActiveClassName();
            addRotateClassName();
            addTabindexAttr();
            setAriaLabelMessageActive();
            removeInvisibleClassName();
        }
        
        if(active && !id.includes(number)) {
            setId([...id, number]);
            addActiveClassName();
            addRotateClassName();
            addTabindexAttr();
            setAriaLabelMessageActive();
            removeInvisibleClassName();
        }
        
        if(active && id.includes(number) && id.length > 0) {
            setId(id.filter(value => value !== number));
            removeActiveClassName();
            removeRotateClassName();
            removeTabindexAttr();
            setAriaLabelMessageInactive();
            addInvisibleClassName();
        }
        
        if(active && id.includes(number) && id.length === 0) {
            setActive(false);
            setId([]);
            removeActiveClassName();
            removeRotateClassName();
            removeTabindexAttr();
            setAriaLabelMessageInactive();
            addInvisibleClassName();
        }
        console.log(number, index, id);        
    }

    return { handleClick }
}

const Item = () => {
    const { handleClick } = QuestionLogic();

    return (
        <React.Fragment>
            {
                data.map( data => {
                    return (
                        <li key={data.id} className="faq__item" tabindex="-1">
                            <h2 id={data.id} className="faq__question" tabindex="0" onClick={handleClick} onKeyPress={handleClick}>{data.question}<img id={data.id} className="faq__icon" src={arrow} alt="Press enter to show answer"/></h2>
                            <p className="faq__answer invisible" aria-live="off">{data.answer}</p>
                        </li>
                    )}
                )
            }
        </React.Fragment>
    );
}

export default Item;