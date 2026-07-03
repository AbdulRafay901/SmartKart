import React from 'react'
import CategoryCheck from './CategoryCheck'
import H6 from './H6'

const CheckCategories = () => {
  return (
    <div className='check-categories'>
        <H6 title="Categories"/>
        <CategoryCheck label="T-Shirts"/>
        <CategoryCheck label="Shirts"/>
        <CategoryCheck label="Jeans"/>
        <CategoryCheck label="Shoes"/>
        <CategoryCheck label="Jackets"/>
    </div>
  )
}

export default CheckCategories