import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const ShoppingCartContext = createContext({
  display: false,
  setDisplay: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const ShoppingCartProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { display, setDisplay, addItemToCart, cartItems, cartCount };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
