import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Comprar from './components/Comprar';





function App() {  
  return ( 

    <div>      
      
<CartProvider>
<BrowserRouter>

<NavBar />

<h1>Bienvenidos</h1>
<h3>Estos son los productos que tenemos para vos </h3>
<Routes>

  <Route path='/' element={<ItemListContainer/>} />
  <Route path='/comprar' element={<Comprar/>} />

  <Route path='/category/:idcategory' element={<ItemListContainer/>}/>
  <Route path='/product/:idproduct' element={<ItemDetailContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
  
</Routes>

<div>      
<br />        

<a href='https://www.facebook.com/marketplace/?ref=app_tab'>Ir a Market</a>
</div>

<Footer/>
</BrowserRouter>
</CartProvider>


      
    </div>

    
   
  );
}

export default App;
