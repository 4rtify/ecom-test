import { createContext, useState, useEffect } from "react";

import SHOP_DATA from  '../shop-data.json';

export const ProductContext = createContext({
  products: [],
  setProducts: () => {}

});

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const value = {products};

  useEffect(() => {
    try{
      setProducts(SHOP_DATA)
    } catch(error) {
      console.log('error loading products', error)
    }
  },[])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}