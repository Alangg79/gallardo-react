import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';



const ItemDetail = ({item}) => {
  
  const [contador, setContador] = useState(1);
  const [compra, setCompra]=useState(false)
  const {id, name,price, category, condition, description, img, stock,quantity}=item
  const navegar = useNavigate()
  const {addItem}= useCart()
   console.log(contador);


  const onAdd = () => {
    let purchase = {
      name,
      price,
      stock,
      img,
      quantity: contador
    }
    setCompra(true)
    addItem(purchase)
  };



  return (
    
    <div>
      <h3>{item.name}</h3>
      <img style={{widht:"150px"}} src={item.img} alt= 'img prod' />
      <div style ={{widht: "450px"}}>{item.description}</div>
      <div><h4>Estado</h4>{item.condition}</div>
      <div><h4>Precio $</h4>{item.price}</div>
      <div><h4>Cantidad de Stock disponible:</h4>{item.stock}</div>
      <ItemCount onAdd={onAdd} contador={contador} setContador={setContador} />  
      <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
      <button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</button>

          
    </div>
  );
}

export default ItemDetail;
