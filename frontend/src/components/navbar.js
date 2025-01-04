import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FFA500' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>Telecom Inventory Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Admin Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Manager Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Staff Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Suppliers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Alerts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Forecast</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
