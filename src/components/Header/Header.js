import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid p-3 text-white">
          <h2 className="navbar-brand fw-bold fs-1"><i class="fas fa-user-graduate text-info"></i> <span className="text-primary">Online</span><span className="text-success">Edu</span></h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gx-2">
              <li className="nav-item">
                <button className="btn btn-outline-success"><NavLink className="nav-link active text-light fw-bold" aria-current="page" to="/home">Home</NavLink></button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success"><NavLink className="nav-link active text-light fw-bold" to="/service">Service</NavLink></button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success"><NavLink className="nav-link active text-light fw-bold" to="/about">About</NavLink></button>
              </li>
              <li className="nav-item">
              <button className="btn btn-outline-success"><NavLink className="nav-link active text-light fw-bold" to="/contact">Contact</NavLink></button>
              </li>
              
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-light fw-bold" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        
    );
};

export default Header;