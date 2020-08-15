import React from 'react';
import github from './img/github-logo.png';

function Header() {
    return (
        <div className="header">
            <p>Ilkkan Tuluce</p>
            <a href="https://github.com/ilkkantuluce" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"/></a>
        </div>
    )
}

export default Header
