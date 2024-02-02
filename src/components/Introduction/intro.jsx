import React from 'react'
import './intro.css'
import human from '../../images/human.png'
export default function Intro() {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">

          <h2 className="i-intro">Hello! My name is</h2>
          <h1 className="i-name">Swapnaroop</h1>
          <h2 className="i-Iam">I am a,</h2>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Graduate Student.</div>
              <div className="i-title-item">Software developer.</div>
              <div className="i-title-item">Cinephile.</div>
              <div className="i-title-item">Tech Enthusiast.</div>
            </div>
          </div>
          <div className="i-description">
            <p className='i-desc'>Explore my journey through cutting-edge coursework, impactful internships, and innovative projects. Discover how my skills in full-stack development, proficiency in web technologies, and commitment to excellence make me a valuable candidate for your team.</p>
          </div>

        </div>
      </div>

      <div className="i-right">
      <div className="i-bg">
      </div>
      <div className="i-bgg"></div>
      <div className="i-bg-img">
      <img src={human} alt="" className="i-image" />
      </div>
      </div>
    </div>
  )
}
