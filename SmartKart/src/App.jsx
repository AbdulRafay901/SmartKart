import React from 'react'
import './App.css';

import Navbar from './layout/Navbar'
import Categories from './layout/Categories';
import Section from './layout/Section';

const App = () => {
  return (
    <div>
          <Navbar />
          <Categories />
          <Section />
    </div>
  )
}

export default App