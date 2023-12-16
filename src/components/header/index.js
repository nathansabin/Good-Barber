import React from 'react';
import Navigation from '../navigation';
import './header.css'
import goodbarber from '../../assets/images/circle.png';

function Header() {
    return (
        <header className='header-format'>
            <div className='header-content'>
                <img src={goodbarber} alt="Good Barber" />
                <h1 className='title'>The Good Barber</h1>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;