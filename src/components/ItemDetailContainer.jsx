import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const productosMP = [
  { id: 100, name: 'Campera Adidas', price: 20000, category:'nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/Gtrbhpd/campera-Adidas.webp', stock:5 },
  { id: 101, name: 'Zapatilla Reebok', price: 15000,category:'usado', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/H7mMBNF/zapatilla-Reebok.jpg', stock:10 },
  { id: 102, name: 'Gorra Deportiva Original Puma', price: 4000,category:'nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/fnr85xz/gorra-Puma.jpg', stock:8 },
]




const ItemDetailContainer = () => {

  const { idcategory, idproduct } = useParams();
  console.log('idcategory: ', idcategory);
  console.log('idproduct: ', idproduct);
  
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState([]);
  const [error, setError] = useState('');

    useEffect(() => {
      let promesaProductos = new Promise((res, rej) => {
        
  
          setTimeout(() => {
            res((productosMP.filter((producto) => producto.idproduct==idproduct))
    
            );
          }, 2000);

  
        }
  
      );
  
      promesaProductos
        .then((res) => {
          setProductDetail(res.find((producto) => producto.idproduct==idproduct));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [idproduct]);


  return (
    <div>
      {loading ? ("CARGANDO PRODUCTO") : (<ItemDetail item={productDetail}/>)}
      
    </div>
  );
}

export default ItemDetailContainer
