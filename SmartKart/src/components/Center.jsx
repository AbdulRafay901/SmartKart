import React from 'react'
import Cart from './Cart'

const Center = () => {
  return (
    <div className='center'>
        <div className="container-fluid p-0">
              <div className="row gy-3 gx-3">
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />  
                    <Cart />
                    <Cart />  
              </div>
        </div>
    </div>
  )
}

export default Center