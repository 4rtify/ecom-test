import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const {display ,setDisplay, cartCount} = useContext(ShoppingCartContext);

  const toggleIsCartOpen = () => setDisplay(!display)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;