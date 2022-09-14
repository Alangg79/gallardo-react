import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';




function App() {  
  return ( 

    <div>      

      <BrowserRouter>

        <NavBar />

        <h1>Bienvenidos</h1>
        <h3>Estos son los productos que tenemos para vos </h3>
        <Routes>

          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idcategory' element={<ItemListContainer/>}/>
          <Route path='/product/:idproduct' element={<ItemDetailContainer/>}/>
          
        </Routes>

        <div>      
        <br />        

        <a href='https://www.facebook.com/marketplace/?ref=app_tab'>Ir a Market</a>
      </div>

        <Footer/>
      </BrowserRouter>


      
    </div>

    
   
  );
}

export default App;
