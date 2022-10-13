import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';




  const ItemListContainer = ({}) => {

    const {idcategory} = useParams();
    
    
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
      

  //firebase

  useEffect(() => {
    setLoading(true)
    const productos= idcategory ? query(collection(db, "products"), where("category", "==", idcategory)) : collection(db, "products")
    getDocs(productos)
    .then((result) =>{
      const lista = result.docs.map((product) => {
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProductos(lista)
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [idcategory])

return (
<>
      <div>    
      <p>{loading ? 'Loading...' : (<ItemList productos={productos}/>)}</p>
    </div>

</>
  );

}
export default ItemListContainer






