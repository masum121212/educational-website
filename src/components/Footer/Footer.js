import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark m-5 mx-auto">
            <div className="row justify-content-center align-items-center p-5">
            <div className="col-4 col-md-4 col-lg-4">
            <h2 className="fw-bold fs-1"><i className="fas fa-graduation-cap text-light"></i> <span className="text-primary">Online</span><span className="text-success">Edu</span></h2>
                <p className="text-light">to help improve your skill understanding, no matter where life takes you and to help boost your confidence in understanding your personal skills </p>
               
            </div>
            <div className="col-4 col-md-4 col-lg-4">
            <h4 className="fw-bold fs-1 text-light">
                Resourses
            </h4>
            <a href="">Resourse</a><br />
                <a href="">Terms and condition</a><br />
                <a href="">Service Area</a><br />
                <a href="">Documents</a><br />
                <a href="">How it works</a>

                
            </div>
            <div className="col-4 col-md-4 col-lg-4">
            <h4 className="fw-bold fs-1 text-light">
                privacy policy
            </h4>
                <a href="">Home</a><br />
                <a href="">About</a><br />
                <a href="">Privacy policy</a><br />
                <a href="">Services</a>
                
            </div>
            <small className="text-light justify-content-center">copyright ©2021Financiio</small>
            </div>
        </div>
    );
};

export default Footer;