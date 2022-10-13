import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import CartItem from './CartItem';
import {Link} from 'react-router-dom'


const Cart = () => {
  const{cart,cartTotal, clear} = useCart()
  const navegar = useNavigate()
  
  


  return (
    <div>
      {
        !cart.length
        ? <div>
          <h2> Tu carrito esta vacio</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <button className="btn btn-warning" onClick ={() => navegar ("/")}> Ir a comprar</button>
        </div>
        : <div>
          <h2>Tu carrito</h2>
          {cart.map((compra) => <CartItem key={compra.id} compra={compra}/>)}

          <br/>

          <h2>Total a pagar : $ {cartTotal()}</h2>
          <br/>
          <br/>
          <br/>
          <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
          <Link className="nav-link" to="/comprar"> <button className='btn btn-success'> Terminar compra</button></Link>
          <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
        </div>
      }
      
    </div>
  );
}

export default Cart
