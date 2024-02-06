import React from 'react'
import './about.css'
import about from '../../images/about.png'

export default function About() {
  return (
    <section id="About">
    <div className='a'>
      <div className="a-left">
        <div className="a-bg">
        <img src={about} className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className='a-title'>About</h1>
        <p className='a-sub'>Hey, my name is Swapnaroop and I am Full Stack Developer. My passion is to craft seamless, user-centric websites or apps.</p>
        <p className='a-desc'>I Completed my undergrad studies in Computer Engineering at Mumbai University. Currently I am pursuing MS in Computer Science at Stevens Institute of Technology maintaining GPA <b>4.00</b>. </p>
        
      </div>
    </div>
    </section>
  )
}
