import React from 'react';
import './styles/Illustration.css';

import box from '../assets/images/illustration-box-desktop.svg';
import illustration from '../assets/images/illustration-woman-online-desktop.svg';
import shadowMobile from '../assets/images/bg-pattern-mobile.svg';
import shadowDesktop from '../assets/images/bg-pattern-desktop.svg';

function Illustration() {
    return (
        <div className="illustration">
            <img className="illustration__box" src={box} aria-hidden="true" alt="Digital illustration of a box"/>
            <img className="illustration__base" src={illustration} alt="Digital illustration of a woman looking at a computer screen"/>
            <picture className="illustration__shadow--container" aria-hidden="true">
                <source media="(min-width: 1025px)" srcset={shadowDesktop} />
                <source media="(min-width: 0px)" srcset={shadowMobile} />
                <img className="illustration__shadow" src={shadowMobile} alt="Digital illustration of a shadow"/>
            </picture>
        </div>
    );
}

export default Illustration;