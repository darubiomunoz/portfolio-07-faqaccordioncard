import React from 'react';
import './styles/FAQ.css';

const FAQ = ({ children }) => {
    return (
        <ul className="faq">
            <h1 className="title" tabIndex="0">FAQ</h1>
            {children}
        </ul>
    );
}

export default FAQ;