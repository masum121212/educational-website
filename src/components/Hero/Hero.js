import React from 'react';
import './Hero.css'
import img from '../Images/hero.jpg'
const Hero = () => {
    return (
        <div className="container mx-auto">
            <div className="hero container p-5 row row-cols-2 row-cols-md-2 row-cols-lg-2 mx-auto shadow">
            <div className="col text-wrap">
            <h1><span className="text-primary">The New Way</span> <span className="text-light">To</span> <span className="text-success">Learn Properly In With Us !</span> <i class="fas fa-laptop-code text-info"></i></h1>
            <br />
            <h4 className="text-white">Register now for 30% off</h4>
            <button className="btn btn-success fw-bold">REGISTER</button>
            </div>
            
            <img className="col" src={img} alt="" />
            
            
            </div>
        </div>
    );
};

export default Hero;