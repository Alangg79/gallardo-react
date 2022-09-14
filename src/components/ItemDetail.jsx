import React from 'react';
import ItemCount from './ItemCount';
import { useState } from "react";


const ItemDetail = ({item}) => {
  return (
    
    <div>
      <h3>{item.name}</h3>
      <img style={{widht:"150px"}} src={item.img} alt= 'img prod' />
      <div style ={{widht: "450px"}}>{item.description}</div>
      <div><h4>Estado</h4>{item.condition}</div>
      <div><h4>Precio $</h4>{item.price}</div>
      <div><h4>Cantidad de Stock disponible:</h4>{item.stock}</div>
      <ItemCount/>      
    </div>
  );
}

export default ItemDetail;
