import React from 'react'
import LeftSide from '../components/LeftSide'
import Center from '../components/Center'
import RightSide from '../components/RightSide'

const Section = () => {
  return (
    <div className='section'>
          <LeftSide />
          <Center />
          <RightSide />
    </div>
  )
}

export default Section