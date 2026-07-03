import React from 'react'
import H6 from './H6'

const PriceRange = () => {
  return (
    <div className='price-range'>
         <H6 title={'Price Ranges'}/>
         <input type='range'></input>
         <div className="low-to-high">
               <p>$0</p>
               <p>$300</p>
         </div>
    </div>
  )
}

export default PriceRange