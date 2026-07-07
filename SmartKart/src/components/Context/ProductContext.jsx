import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


  export const Product = createContext()

const ProductContext = (props) => {

  const [MainData, setMainData] = useState([])
  const [DisplayData, setDisplayData] = useState([])

 
  console.log(MainData)

  useEffect(() => {
     const fetch = async () => {
          const {data} = await axios.get('https://fakestoreapi.com/products');

          setMainData(data)
          setDisplayData(data)
      }

      fetch()
  }, [])

 const filterProducts = (categoryName) => {
    
    if (categoryName === 'all') {
      setDisplayData(MainData);
    }
    else {
      
      const filtered = MainData.filter((item) => categoryName.includes(item.category));
      setDisplayData(filtered); 
    }
  };


  const PriceFilter = (price) => {
     const filter = MainData.filter(M => M.price <= price);
     setDisplayData(filter)
  }

  const Title = (t) => {
     const filter = MainData.filter(f => f.title.toLowerCase().includes(t.toLowerCase()));
     setDisplayData(filter)
  }


  


  return (
    <div> 
         <Product.Provider value={{DisplayData, MainData, filterProducts, PriceFilter, Title}}>
           {props.children}
         </Product.Provider>
    </div>
  )
}

export default ProductContext




