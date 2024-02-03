import React from 'react'
import '../ProductList/productlist.css'
import Product from '../Product/Product'
import TheDailyBugle from '..//..//images/TheDailyBugle.png'
import AppleArrow from '..//..//images/AppleArrow.png'
import CozyCrest from '..//..//images/CozyCrest.png'

export default function Productlist() {
  return (
    <section id="Projects">
    <div className='pl'>
      <div className="pl-text">


        <h1 className="pl-title">Project Gallery</h1>


        <p className="pl-desc">
        Embark on a journey through my project gallery as we explore and discover the diverse range of creations that showcase my skills and passion—let's walk through projects together.
        </p>
      </div>




      <div className="pl-list">

        <div className="pl-section1">
          <div className="pl-s1-left-side">
            <Product image={TheDailyBugle} />
          </div>
          <div className="pl-s1-right-side">
          <h2>The Daily Bugle</h2>
            <p className='pl-section-text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempore numquam. Officiis earum tempore culpa ab expedita facere quo suscipit, quia iusto dolore, natus accusamus! Veritatis iusto nam est minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi assumenda? Cupiditate facilis dolorum voluptates fugiat, magni ducimus aspernatur neque quam similique non minus veritatis! Corporis, quisquam. Laudantium, deleniti dolorem?</p>
          </div>
        </div>


        <div className="pl-section2">
          <div className="pl-s1-right-side">
          <h2 className='pl-h2'>The CozyCrest</h2>
            <p className='pl-section-text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempore numquam. Officiis earum tempore culpa ab expedita facere quo suscipit, quia iusto dolore, natus accusamus! Veritatis iusto nam est minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi assumenda? Cupiditate facilis dolorum voluptates fugiat, magni ducimus aspernatur neque quam similique non minus veritatis! Corporis, quisquam. Laudantium, deleniti dolorem?</p>
          </div>
          <div className="pl-s1-left-side">
            <Product image={CozyCrest}  />
          </div>
        </div>


        <div className="pl-section1">
          <div className="pl-s1-left-side">
            <Product />
          </div>
          <div className="pl-s1-right-side">
            <h2>The Portfolio</h2>
            <p className='pl-section-text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempore numquam. Officiis earum tempore culpa ab expedita facere quo suscipit, quia iusto dolore, natus accusamus! Veritatis iusto nam est minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi assumenda? Cupiditate facilis dolorum voluptates fugiat, magni ducimus aspernatur neque quam similique non minus veritatis! Corporis, quisquam. Laudantium, deleniti dolorem?</p>
          </div>
        </div>


        <div className="pl-section2">
          <div className="pl-s1-right-side">
          <h2 className='pl-h2'>Arrow's Apple Quest</h2>
            <p className='pl-section-text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempore numquam. Officiis earum tempore culpa ab expedita facere quo suscipit, quia iusto dolore, natus accusamus! Veritatis iusto nam est minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi assumenda? Cupiditate facilis dolorum voluptates fugiat, magni ducimus aspernatur neque quam similique non minus veritatis! Corporis, quisquam. Laudantium, deleniti dolorem?</p>
          </div>
          <div className="pl-s1-left-side">
            <Product image={AppleArrow} />
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}
