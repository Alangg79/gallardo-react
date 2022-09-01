import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';




  const ItemListContainer = ({saludo}) => {
    
    return (
      <div>
        <p>{saludo}</p>
      </div>
      
    );
  }

  export default function Promesas() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState('');

  useEffect(() => {
    let promesaProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 100, name: 'Campera Adidas', price: 20000 },
          { id: 101, name: 'Zapatilla Reebok', price: 15000 },
          { id: 102, name: 'Gorra Deportiva Original Puma', price: 4000 },
        ]);
      }, 2000);
    });

    promesaProductos
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p>Loading: {loading ? 'Loading...' : 'fin'}</p>
      <p>Error: {error ? error : null}</p>

      <ItemList/>
      

    </div>
  );
}





