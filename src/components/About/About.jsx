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
        <p className='a-sub'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit veniam ut id, hic explicabo odio.</p>
        <p className='a-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloremque sint officia placeat vero modi non obcaecati dignissimos iusto aut. Autem molestiae asperiores velit itaque.</p>
      </div>
    </div>
    </section>
  )
}
