import React from 'react'
import H6 from './H6'
import ColorsRadio from './ColorsRadio'

const Colors = () => {
  return (
    <div className='colors'>
        <H6 title="Color"/>
         <div className="radios">
              <ColorsRadio color={'black'}/>
              <ColorsRadio color={'gray'}/>
              <ColorsRadio color={'skyblue'}/>
              <ColorsRadio color={'pink'}/>
              <ColorsRadio color={'orange'}/>
              <ColorsRadio color={'red'}/>
         </div>
    </div>
  )
}

export default Colors