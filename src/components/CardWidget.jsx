import React from 'react';
import { useCart } from '../context/CartContext';

const CardWidget = ({}) => {

  const{cartQuantity} = useCart()

return (
  <div>
    <span>🛒{cartQuantity() || ''}</span>
  </div>
);
}


export default CardWidget;




