import React from 'react';
import '../styles/Header.css'

function Header(){
    return (
        <header>
            <nav className='navbar'>
                <a href='#' className='null'>
                    <h3>RC.</h3>
                </a>
                <ul>
                    <li class='nav-item active'><a>Home</a></li>
                    <span>|</span>
                    <li class='nav-item'><a>About</a></li>
                    <span>|</span>
                    <li class='nav-item'><a>Projects</a></li>
                    <span>|</span>
                    <li class='nav-item'><a>Contact</a></li>                  
                </ul>
                <div class='info-contact'>
                    <p>hi</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;