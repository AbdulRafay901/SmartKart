import React from 'react'
import SizeRadio from './SizeRadio'
import H6 from './H6'

const Size = () => {
  return (
    <div className='Size'>
         <H6 title="Size"/>
         <div className="radios">
         <SizeRadio label="S"/>
         <SizeRadio label="M"/>
         <SizeRadio label="L"/>
         <SizeRadio label="XL"/>
         </div>
    </div>
  )
}

export default Size