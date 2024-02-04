import React, { useRef, useState } from 'react'
import '..//Navbar/navbar.css'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        console.log(!isNavOpen)
        setNavOpen(!isNavOpen);
    };

    const reloadPage = () => {
        window.location.reload();
    };
    
    return (
        <div>
            <div class="navbar" id="navbar">
                <div className="navbar-brand" onClick={reloadPage}>Swap.dev</div>
                <div className={`nav-list ${isNavOpen ? 'show' : ''}`}>
                    <Link
                        className='item'
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        About
                    </Link>

                    <Link
                        className='item'
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Skills
                    </Link>

                    <Link
                        className='item'
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Project Gallery
                    </Link>

                    <Link
                        className='item'
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={500}
                    >
                        Contact
                    </Link>
                </div>
                <div className="navbar-toggle" onClick={toggleNav}>&#9776;</div>
            </div>
        </div>
    )
}
