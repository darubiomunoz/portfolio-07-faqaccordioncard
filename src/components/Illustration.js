import React from 'react';
import './styles/Illustration.css';

import box from '../assets/images/illustration-box-desktop.svg';
import illustration from '../assets/images/illustration-woman-online-desktop.svg';
import shadowMobile from '../assets/images/bg-pattern-mobile.svg';
import shadowDesktop from '../assets/images/bg-pattern-desktop.svg';

function Illustration() {
    return (
        <div className="illustration">
            <img className="illustration__box" src={box} alt="Digital illustration of a box"/>
            <img className="illustration__base" src={illustration} alt="Digital illustration of a woman looking at a computer screen"/>
            <img className="illustration__shadow" src={shadowMobile} srcset={shadowDesktop + " 1025w"} sizes="(min-width: 1025px) 1025px" alt="Digital illustration of a shadow"/>
        </div>
    );
}

export default Illustration;