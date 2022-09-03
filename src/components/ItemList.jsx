import React from "react";
import Item from "./Item";


const ItemList =({productos}) => {
  return (
    <>
    {productos.map((item) =>(
      <Item item ={item} />
    ))}
    </>
  )
}

export default ItemList
