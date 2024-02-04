import React, { useRef } from 'react'
import '..//Navbar/navbar.css'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <div>
            <div class="navbar" id="navbar">
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
                    offset={0}
                    duration={500}
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}
