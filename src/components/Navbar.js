import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeHmbgrMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/portfolio" className="navbar-logo">
                        URIEL A. NUNEZ
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/portfolio/about-me' className='nav-links' onClick={closeHmbgrMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio/webDev' className='nav-links' onClick={closeHmbgrMenu}>
                                Web Dev
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio/design' className='nav-links' onClick={closeHmbgrMenu}>
                                Graphic Design
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <div className='nav-links' onClick={closeHmbgrMenu}>
                                <a href="https://docs.google.com/document/d/1egkXPbDBuTSw8L5plZzGRO4qeZXK8kAggp0Dhzo9gwg" target="_blank">Resume</a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio/contact' className='nav-links' onClick={closeHmbgrMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

