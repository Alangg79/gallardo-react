import React, { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const increase = () => {
    setContador(contador >= 10 ? setContador : contador + 1); 
  };

  const decrease = () => {
    setContador(contador <= 1 ? setContador : contador - 1);
  };

  const confirm = () => {
    console.log("Tiene funcionalidad");
  };

  return (
    <>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <h1>{contador}</h1>
      <button onClick={confirm}> Agregar al carrito </button>
    </>
  );
};

export default ItemCount;
