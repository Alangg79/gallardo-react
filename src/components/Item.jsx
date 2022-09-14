import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";


const Item =({item}) => {
    const navegar=useNavigate()

    return (
          
        <div>
            
        <h3>{item.name}</h3>
      <img style={{widht:"150px"}} src={item.img} alt= 'img prod' />
      <div style ={{widht: "450px"}}>{item.description}</div>
      <div><h4>Estado</h4>{item.condition}</div>
      <div><h4>Precio $</h4>{item.price}</div>
      <div><h4>Cantidad de Stock disponible:</h4>{item.stock}</div>
      <ItemCount/>    
        <button className='btn btn-primary' onClick={()=>navegar(`/product/${item.id}`)}>Ver más</button>
        
        </div>     
        


        

	);    

}

export default Item


