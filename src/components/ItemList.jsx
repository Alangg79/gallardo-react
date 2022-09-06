import React from "react";
import Item from "./Item";


const ItemList =({productos}) => {
  return (
    <>
      {productos.map((item) =>  (
      <Item key={item.id} item={item} />
    ))}
    </>
  )
}

export default ItemList
