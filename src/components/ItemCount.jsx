import React from "react";



const ItemCount = ({contador,setContador, onAdd}) => {
  
  

  const increase = () => {
    setContador(contador >= 10 ? contador : contador + 1); 
  };

  const decrease = () => {
    setContador(contador <= 1 ? contador : contador - 1);
  };


  return (
    <>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <h1>{contador}</h1>      
      <button onClick={onAdd} className='btn btn-primary'> Agregar al carrito </button>
    </>
  );
};

export default ItemCount;
