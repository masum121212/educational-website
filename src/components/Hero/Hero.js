import React from 'react';
import img from '../Images/hero.jpg'
const Hero = () => {
    return (
        <div className="container bg-info m-5 mx-auto">
            <div className="row justify-content-center align-items-center p-5">
            <h1 className="col col-md-6 col-lg-6"><span className="text-primary">The New Way</span> To <span className="text-success">Learn Properly In With Us !</span> <i className="fab fa-leanpub"></i></h1>
            <img className="col col-md-6 col-lg-6" src={img} alt="" />
            
            </div>
        </div>
    );
};

export default Hero;