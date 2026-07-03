import React from 'react'

const ColorsRadio = ({color}) => {
  return (
    <div>
         <label htmlFor="color" style={{backgroundColor:`${color}`}}>
            <input type="radio" id='color' hidden></input>
         </label>
    </div>
  )
}

export default ColorsRadio