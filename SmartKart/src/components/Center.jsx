import React, { useContext } from 'react'
import { useState } from 'react'
import Cart from './Cart'
import { useEffect } from 'react'
import axios from 'axios'; 
import { Product } from './Context/ProductContext';


const Center = () => {

  const {DisplayData} = useContext(Product)

  return (
    <div className='center'>
        <div className="container-fluid p-0">
              <div className="row gy-3 gx-3">
                    
                  {DisplayData.slice(0,6).map((elem,idx) => (
                     <Cart  key={idx} name={elem.title.split(" ").slice(0,4).join(" ")} price={elem.price} img={elem.image} rating={elem.rating.rate}/> 
                  ))}
                    
              </div>
        </div>
    </div>
  )
}

export default Center