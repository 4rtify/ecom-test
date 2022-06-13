import { useContext } from 'react';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(ShoppingCartContext)
  return (
    <div>
      <h1>I am Checkout</h1>
      <div>
        {
          cartItems.map((cartItem) => {
            const {id, name, quantity} = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span>decrement</span>
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Checkout;