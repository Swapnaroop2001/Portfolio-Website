import React from 'react'
import './intro.css'
import human from '../../images/human.png'
export default function Intro() {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">

          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Swapnaroop</h1>
          <h2 className="i-Iam">I am a</h2>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Graduate Student.</div>
              <div className="i-title-item">Software developer.</div>
              <div className="i-title-item">Cinephile.</div>
              <div className="i-title-item">Tech Enthusiast.</div>
            </div>
          </div>
          <div className="i-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolorem reiciendis atque dolore praesentium exercitationem cupiditate! Adipisci omnis iure nihil distinctio impedit accusamus, aut atque vitae. Odit delectus dolores temporibus?</p>
          </div>

        </div>
      </div>

      <div className="i-right">
      <div className="i-bg"></div>
      <img src={human} alt="" className="i-image" />
      </div>
    </div>
  )
}
