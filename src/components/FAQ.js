import React from 'react';
import './styles/FAQ.css';

const FAQ = ({ children }) => {
    return (
        <ul className="faq">
            {children}
        </ul>
    );
}

export default FAQ;