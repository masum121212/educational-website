import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid p-3 text-white">
          <h2 className="navbar-brand fw-bold fs-1"><i className="fas fa-graduation-cap text-info"></i> <span className="text-primary">Online</span><span className="text-success">Edu</span></h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light fw-bold" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light fw-bold" to="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light fw-bold" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active text-light fw-bold" to="/contact">Contact</Link>
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