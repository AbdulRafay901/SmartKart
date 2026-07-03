import React from 'react'
import hero  from '../assets/download-removebg-preview.png'
import Star from './Star'
import SimpleStar from './SimpleStar'
import Button from './Button'

const Cart = () => {
  return (
    <div className='col-lg-4'>
         <div className="cart">
                <div className="img">
                     <img src={hero}></img>
                </div>
                <div className="content">
                      <p className='name'>Classic Denim Jacket</p>
                      <div className="rating">
                         <SimpleStar />
                         <SimpleStar />
                         <SimpleStar />
                         <SimpleStar />
                         <Star/>  
                      </div>
                      <p className='price'>$59.00</p>
                      <Button text='Add to Cart'/>
                </div>
          </div>
    </div>
  )
}

export default Cart