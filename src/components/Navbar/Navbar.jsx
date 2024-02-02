import React, { useRef } from 'react'
import '..//Navbar/navbar.css'


export default function Navbar() {
    return (
        <div>
            <div class="navbar" id="navbar">
                <button className='item'>About</button>
                <button className='item'>Skilll</button>
                <button className='item'>Projects</button>
                <button className='item'>Contact</button>
            </div>
        </div>
    )
}
