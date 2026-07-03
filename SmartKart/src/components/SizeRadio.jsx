import React from 'react'

const SizeRadio = ({label}) => {
  return (
    <div>
         <label htmlFor="radio">
            <input type="radio" id='radio' hidden></input>
            {label}
         </label>
    </div>
  )
}

export default SizeRadio