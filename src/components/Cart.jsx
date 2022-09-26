import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';


const Cart = () => {
  const{cart, removeItem, cartTotal, clear} = useContext(CartContext)
  const navegar = useNavigate()
  console.log('carrito', cart);
  return (
    <div>
      {
        !cart.length
        ? <div>
          <h2> Tu carrito esta vacio</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <button onClick={() => navegar ("/")}> Ir a comprar</button>
        </div>
        : <div>
          <h2>Tu carrito</h2>
          {cart.map((compra) => <CartItem key={compra.id} compra={compra}/>)}

          <span>Total a pagar : $ {cartTotal()}</span>
          <button className='btn btn-danger' onClick={clear}> Vaciar carrito </button>
          <button className='btn btn-success'> Terminar compra</button>
        </div>
      }
      
    </div>
  );
}

export default Cart
