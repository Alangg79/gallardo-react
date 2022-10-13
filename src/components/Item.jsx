import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useCart } from "../context/CartContext";


const Item =({item}) => {
  const [contador, setContador] = useState(1);
  const [compra, setCompra]=useState(false)
  const {id, name,price, category, condition, description, img, stock}=item
  const navegar = useNavigate()
  const {addItem}= useCart()
  


  const onAdd = () => {
    setCompra(true)
    let purchase = {
      id,
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
          
        <>
            
        <h3>{item.name}</h3>
      <img style={{widht:"150px"}} src={item.img} alt= 'img prod' />
      <div style ={{widht: "450px"}}>{item.description}</div>
      <div><h4>Estado</h4>{item.condition}</div>
      <div><h4>Precio $</h4>{item.price}</div>
      <div><h4>Cantidad de Stock disponible:</h4>{item.stock}</div>
      <ItemCount onAdd={onAdd} contador={contador} setContador={setContador} />   
      <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
      <button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</button>
        <button className='btn btn-primary' onClick={()=>navegar(`/product/${item.id}`)}>Ver más</button>
        
        </>     
        


        

	);    

}

export default Item


