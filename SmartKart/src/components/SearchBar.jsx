import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from 'react';
import { useContext } from 'react';




const SearchBar = () => {


  

  return (
    <div className='search-bar'>
         <CiSearch className='search-icon'/>
         <input type="search" placeholder='Search'></input>
         <div className="arrow-div">
               <IoMdArrowForward className='arrow-icon' onClick={Search}/>
         </div>
    </div>
  )
}

export default SearchBar