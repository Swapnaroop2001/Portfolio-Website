import React from 'react'
import './intro.css'
import human from '../../images/human.png'
export default function Intro() {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello! <img className='hand' src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"></img>My name is</h2>
          <h1 className="i-name">Swapnaroop</h1>
          <h2 className="i-Iam">& I am a,</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer.</div>
              <div className="i-title-item">Graduate Student.</div>
              <div className="i-title-item">Cinephile.</div>
              <div className="i-title-item">Tech Enthusiast.</div>
            </div>
          </div>

          <div className="i-description">
            <p className='i-desc'>Explore my journey through ...and innovative projects.</p>
          </div>
        </div>
      </div>

      <div className="i-right">
        
        <div className="i-myImgBg">
        <img src={human} className="myImage" />
        </div>
        
      </div>

    </div>


  )
}
