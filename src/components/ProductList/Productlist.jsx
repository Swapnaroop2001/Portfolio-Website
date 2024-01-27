import React from 'react'
import '../ProductList/productlist.css'
import Product from '../Product/Product'

export default function Productlist() {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className="pl-title">Hello this is list</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis optio doloremque dicta nihil sequi animi veritatis laudantium culpa ullam, porro autem adipisci atque voluptate molestias. Repellendus laboriosam perferendis magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure architecto fugit? Voluptates deleniti quo doloremque? Quaerat quibusdam iste recusandae repudiandae quae officia dolorum, excepturi voluptas quod! Ipsam, quam unde.
            </p>
        </div>


    <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
    </div>
  )
}
