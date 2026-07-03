import React from 'react'

const CategoryCheck = ({label}) => {
  return (
    <div>
          <label>
          <input type="checkbox"></input>
           {label}
          </label>
    </div>
  )
}

export default CategoryCheck