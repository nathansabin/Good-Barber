import React from 'react';
import Navigation from '../navigation';
import './header.css'
//import goodbarber from '../../assets/images/goodbarber';

function Header() {
    return (
        <header className='header-format'>
            <div className='header-content'>
                <img alt="Good Barber" />
                <h1>The Good Barber</h1>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;