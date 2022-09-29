import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import {data} from '../mocks/mockData'


const productosMP = [
  { id: 100, name: 'Campera Adidas', price: 20000, category:'camperas',condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/Gtrbhpd/campera-Adidas.webp', stock:5 },
  { id: 101, name: 'Zapatilla Puma Wild Rider Rollin', price: 24499,category:'zapatillas',condition:'Usado', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/rxkQn66/zapatilla-Reebok.webp', stock:10 },
  { id: 102, name: 'Gorra Vintage Visera Gastada Jean Curva Algodon Motors Retro', price:1999,category:'gorras', condition:'Usado', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/zr5QRgk/gorra1.webp', stock:6 },
  { id: 103, name: 'Campera New Balance Lightweight', price: 25000, category:'camperas',condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/DCBSpD0/campera-New-Balance.jpg border=0', stock:5 },
  { id: 104, name: 'Zapatilla Showtheway adidas Sport 78 ', price: 16799,category:'zapatillas',condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/gT7dGNC/zapatilla-Show-The-Way.webp', stock:10 },
  { id: 105, name: 'Gorra Vintage Denim Prelavada Diseños Bordados Moda Premium', price: 1665,category:'gorras', condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/6yQDMd2/105.webp', stock:8 },
  { id: 106, name: 'Campera Ansilta Hombre Raptor PRO Con Capucha WS SOFT', price: 32000, category:'camperas',condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/CsbkyWW/campera-Ansilta.jpg" alt="campera-Ansilta"', stock:9 },
  { id: 107, name: 'Zapatilla Nike Air Force 1 Shadow', price: 44399,category:'zapatillas',condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/0mNR0sH/nike-Air-Force-Shadow.webp', stock:10 },
  { id: 108, name: 'Gorras Clásicas De Gabardina 100% Algodón Visera Curva Cierre Ajustable Unisex', price: 1395,category:'gorras', condition:'Nuevo', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis', img:'https://i.ibb.co/tKd5Vg1/108.webp', stock:7 },

]




  const ItemListContainer = ({}) => {

    const {idcategory} = useParams();
    console.log('idcategory: ', idcategory);
    
    
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
      

  //firebase

  useEffect(() => {
    setLoading(true)
    const productos= idcategory ?query(collection(db, "products"), where("category", "==", idcategory)) : collection(db, "products")
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

  // useEffect(() => {
  //   (!idcategory)
  //   ?
  //   setProductos(productosMP)
  //   :
  //   setProductos(productosMP.filter((producto) => producto.category===idcategory))

  //   setTimeout(() => {
  //     setLoading(false)
  //   },2000)


  // }, [idcategory]);

  return (
<>
      <div>    
      <p>{loading ? 'Loading...' : (<ItemList productos={productos}/>)}</p>
    </div>

</>
  );

}
export default ItemListContainer






