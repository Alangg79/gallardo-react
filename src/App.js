import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import FetchContainer from './test/FetchContainer';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  const saludo ='Bienvenidos'
  return (
    
  

    <div>
      <NavBar />

      <div>
        <h3>Estos son los productos que tenemos para vos </h3>
        <p></p>

      <ItemListContainer saludo = {saludo}/>
      


       
       
        <br />
        <ItemCount />

        <a href='https://www.facebook.com/marketplace/?ref=app_tab'>Ir a Market</a>
      </div>
      <ItemDetailContainer/>
    </div>

    
   
  );
}

export default App;
