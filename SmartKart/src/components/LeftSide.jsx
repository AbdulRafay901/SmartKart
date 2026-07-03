import React from 'react'
import CheckCategories from './CheckCategories'
import HorizoneLine from './HorizoneLine'
import Size from './Size'
import Colors from './Colors'

const LeftSide = () => {
  return (
    <div className='left-side'>
        <CheckCategories />
        <HorizoneLine />
        <Size />
        <HorizoneLine />
        <Colors />
    </div>
  )
}

export default LeftSide