import React from 'react'
import './intro.css'
import headshot from '../../images/Headshot.png'
export default function Intro() {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello 👋🏼, My name is</h2>
          <h1 className="i-name">Swapnaroop</h1>
          <h2 className="i-Iam">& I am a,</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full-stack Developer.</div>
              <div className="i-title-item">Graduate Student.</div>
              <div className="i-title-item">Cinephile.</div>
              <div className="i-title-item">Tech Enthusiast.</div>
            </div>
          </div>

          <div className="i-description">
            <p className='i-desc'>I invite you to explore my digital realm,</p>
          </div>
        </div>
      </div>

      <div className="i-right">
        
        <div className="i-myImgBg">
        <img src={headshot} className="myImage" />
        </div>
        
      </div>

    </div>


  )
}
