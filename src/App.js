import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import FetchContainer from './test/FetchContainer';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  
  return (
    
  

    <div>
      <NavBar />

      <div>
        <h1>Bienvenidos</h1>
        <h3>Estos son los productos que tenemos para vos </h3>
        <p></p>
        <ItemDetailContainer/>
      


       
       
        <br />
        <ItemCount />

        <a href='https://www.facebook.com/marketplace/?ref=app_tab'>Ir a Market</a>
      </div>
      
    </div>

    
   
  );
}

export default App;
