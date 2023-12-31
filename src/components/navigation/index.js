import React, { useState} from 'react';
import './navigation.css';

function Navigation() {
    const [ openMenu, setOpenMenu] = useState(false);

    const changeMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className='button-layout'>
            <button onClick={changeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>
            {openMenu && 
                <div className='sidebar on-page'>
                    <ui className='sidebar-container'>
                        <a href='/'><li>Home</li></a>
                        <a href='/about'><li>About Us</li></a>
                        <a href='/contact'><li>Contact</li></a>
                    </ui>
                </div>
                }
        </nav>
    );
}

export default Navigation;