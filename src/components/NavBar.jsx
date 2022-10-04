import React from 'react';
import CardWidget from './CardWidget';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Market Place</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/category/camperas">Camperas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/zapatillas">Zapatillas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/gorras">Gorras</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/comprar">Tu compra</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver Más
          </Link>
          <ul className="dropdown-menu">            
            <li><Link className="dropdown-item" to="/category/pantalones">Pantalones</Link></li>
            <li><Link className="dropdown-item" to="/category/accesorios">Accesorios</Link></li>
          </ul>
        </li>
      </ul>

      <NavLink to = "/cart" className="nav-link active">

      <CardWidget/>

      </NavLink>
      
    </div>
  </div>
</nav>
  );
}

export default NavBar;
