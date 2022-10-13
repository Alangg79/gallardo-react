import React from 'react';
import { useCart } from '../context/CartContext';



const CartItem = ({compra}) => {
    const{removeItem} =useCart()

  return (
    <div style ={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"2 rem", width:"100%"}}>
    <img src={compra.img} alt= {compra.name} style={{width:"12rem"}} />
    <span>{compra.name}</span>
    <span>{compra.quantity}</span>
    <span>{compra.price}</span>
    <button className='btn btn-danger' onClick={ () => removeItem(compra.id)}>X</button>
    

  </div>
  );
}

export default CartItem;
