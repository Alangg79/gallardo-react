import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const ItemDetailContainer = () => {

  const { idproduct } = useParams();
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({});


  useEffect(() => {

    const coleccionProductos = collection(db, "products")

    const referenciaDoc = doc(coleccionProductos, idproduct)

    getDoc(referenciaDoc)

    .then((result) =>{
      setProductDetail({
        idproduct: result.id,
        ...result.data()
      })
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [idproduct])
  

    return (
      <>
        {loading ? ("CARGANDO PRODUCTO") : (<ItemDetail item={productDetail}/>)}
        
      </>
    );


}

export default ItemDetailContainer
