import React from 'react'

const Button = ({text,size}) => {
  return (
    <button className='Button' style={{fontSize:`${size}`}}>{text}</button>
  )
}

export default Button