import React from 'react';
import CardWidget from './CardWidget';

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Market Place</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Camperas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Zapatillas</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ver Más
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Remeras</a></li>
            <li><a className="dropdown-item" href="#">Pantalones</a></li>
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
          </ul>
        </li>
      </ul>
      <CardWidget counter={10}/>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
