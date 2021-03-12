import React from 'react';
import './styles/Illustration.css';

import illustration from '../assets/images/illustration.svg';
import shadowMobile from '../assets/images/bg-pattern-mobile.svg';
import shadowDesktop from '../assets/images/bg-pattern-desktop.svg';

const Illustration = () => (
        <div className="illustration">
            <img className="illustration__base" src={illustration} alt="Digital illustration of a woman looking at a computer screen"/>
            <picture className="illustration__shadow--container">
                <source media="(min-width: 1025px)" srcSet={shadowDesktop} />
                <source media="(min-width: 0px)" srcSet={shadowMobile} />
                <img className="illustration__shadow" src={shadowMobile} alt="Digital illustration of a shadow" aria-hidden="true" />
            </picture>
        </div>
);

export default Illustration;