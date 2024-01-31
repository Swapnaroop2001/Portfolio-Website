import React from 'react'
import '..//Product/Product.css'
import TheDailyBugle from '..//..//images/TheDailyBugle.png'

export default function Product(props) {
  {}
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle1"></div>
        <div className="p-circle2"></div>
        <div className="p-circle3"></div>
      </div>

      <a href='https://github.com/Swapnaroop2001' target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt="" className="p-img" />
      </a>
      </div>
  )
}
