import React from 'react';

const ItemListContainer = (props) => {
    console.log(props);
  return (
    <div>
      <p>{props.saludo}</p>
    </div>
  );
}

export default ItemListContainer;

