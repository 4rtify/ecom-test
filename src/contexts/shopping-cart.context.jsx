import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  display: false,
  setDisplay: () => {}
})

export const ShoppingCartProvider = ({children}) => {
  const [display, setDisplay] = useState(false)
  const value = {display, setDisplay}

  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
}