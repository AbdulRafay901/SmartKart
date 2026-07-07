import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from 'react';
import { useContext } from 'react';
import ProductContext from './Context/ProductContext'
import { Product } from './Context/ProductContext'

const SearchBar = () => {


  const { Title } = useContext(Product)

  const [search, setsearch] = useState()

   const Search = () => {
       Title(search)
   }

  return (
    <div className='search-bar'>
         <CiSearch className='search-icon'/>
         <input type="search" placeholder='Search'onChange={(e) => {
              setsearch(e.target.value)
         }}></input>
         <div className="arrow-div">
               <IoMdArrowForward className='arrow-icon' onClick={Search}/>
         </div>
    </div>
  )
}

export default SearchBar