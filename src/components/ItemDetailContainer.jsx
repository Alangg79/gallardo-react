import React from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {ItemListContainer} from './ItemListContainer';


const ItemDetailContainer = () => {
    const [productDetail,setProductDetail]=({})

    useEffect(() =>{
        ItemListContainer
        .then((res) => setProductDetail(res.find((item)=> item.id ==='100')))
    })


  return (
    <div>
      <ItemDetail/>
    </div>
  );
}

export default ItemDetailContainer
