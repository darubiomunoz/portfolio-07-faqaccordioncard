import React, { useState } from 'react';
import './styles/Items.css';

import data from '../data.json';
import arrow from '../assets/images/icon-arrow-down.svg';

const ComponentLogic = () => {
    const [ id, setId ] = useState([]);

    const handleClick = event => {
        const number = event.target.id;

        if(!id.includes(number)) setId([...id, number]);
        if(id.includes(number)) {
            const newId = id.filter(element => element !== number);
            setId(newId);
        };

        if(!id.includes(number) && id.length > 0) setId([...id, number]);
    }

    return { handleClick, id }
}

const Items = () => {
    const { handleClick, id } = ComponentLogic();

    return (
        <React.Fragment>
            {
                data.map( data => {
                    return (
                        <li key={data.id} className="faq__item" tabIndex="-1">
                            <div className="faq__container">
                                <h2 className={`faq__question ${id.includes(data.id) ? 'active' : ''}`} tabIndex="0">{data.question}</h2>
                                <img id={data.id} className={`faq__icon ${id.includes(data.id) ? 'rotate' : ''}`} src={arrow} tabIndex="0" aria-label={id.includes(data.id) ? 'Press enter to hide answer' : 'Press enter to show answer'} onClick={handleClick} onKeyPress={handleClick} aria-live="polite" alt="Press enter to show answer"/>
                            </div>
                            <p className={`faq__answer ${id.includes(data.id) ? '' : 'invisible'}`} tabIndex={id.includes(data.id) ? '0' : '-1'} aria-live="off">{data.answer}</p>
                        </li>
                    )}
                )
            }
        </React.Fragment>
    );
}

export default Items;