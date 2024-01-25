import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src= "https://images.pexels.com/photos/19891046/pexels-photo-19891046/free-photo-of-a-red-tram-on-a-street-in-lisboa-carrying-people-inside-on-a-sunny-day-in-spring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="a-img"/>
            </div>
        </div>

        <div className="a-right">
            <h1 className='a-title'>About</h1>
            <p className='a-sub'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit veniam ut id, hic explicabo odio.</p>
            <p className='a-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste rerum dolor, consectetur laudantium harum quis ut culpa ea placeat debitis porro ipsum commodi alias delectus blanditiis natus perspiciatis, autem sint. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam nesciunt alias vitae dignissimos numquam ex fugiat architecto quibusdam quas vero aspernatur voluptatibus aliquam accusantium totam possimus, officia nobis, fuga atque?</p>
        </div>
    </div>
  )
}
