import React from 'react'
import H6 from './H6'
import ColorsRadio from './ColorsRadio'

const Colors = () => {
  return (
    <div className='Size'>
        <H6 title="Color"/>
         <div className="Colors">
              <ColorsRadio />
         </div>
    </div>
  )
}

export default Colors