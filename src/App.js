import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const saludo ='Bienvenidos'
  return (
    

    <div>
      <NavBar />

      <ItemListContainer saludo = {saludo}/>
      
      <div>
        <h3>Estos son los productos que tenemos para vos </h3>
        <p></p>
        <br />
        <a href='https://www.facebook.com/marketplace/?ref=app_tab'>Ir a Market</a>
      </div>
      
    </div>
   
  );
}

export default App;
