import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mx-auto">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-auto text-light p-5">
                <div className="col">
                    <h5 className="fw-bold"><i className="fas fa-graduation-cap text-info"></i> <span className="text-primary">Online</span><span className="text-success">Edu</span></h5>
                    <hr />
                    <p className="text-light">to help improve your skill understanding, no matter where life takes you and to help boost your confidence in understanding your personal skills </p>
               
                </div>
                <div className="col">
                    <h5 className="fw-bold text-light"><i class="fas fa-database text-info"></i> Resourses</h5>
                    <hr />
                    <a href="">Resourse</a><br />
                    <a href="">Terms and condition</a><br />
                    <a href="">Service Area</a><br />
                    <a href="">Documents</a><br />
                    <a href="">How it works</a>  
                </div>
                <div className="col">
                    <h5 className="fw-bold text-light"><i class="fas fa-user-shield text-info"></i> privacy policy</h5>
                    <hr />
                    <Link to="/home"><i class="fas fa-home text-info fs-3"></i></Link><br />
                    <Link to="/about"><i class="fas fa-info-circle text-info fs-3"></i></Link><br />
                    <Link to="/contact"><i class="fas fa-phone-square text-info fs-3"></i></Link><br />
                    <Link to="/service"><i class="fas fa-server text-info fs-3"></i></Link>   
                </div>
                <div className="col">
                    <h5 className="fw-bold text-light"><i class="fas fa-network-wired text-info"></i> Connect Us </h5>
                    <hr />
                    <a href="https://www.facebook.com/masum.evan.96"><i class="fab fa-facebook-square text-info fs-3"></i></a><br />
                    <a href="https://www.instagram.com/masum_evan12/"><i class="fab fa-instagram-square text-info fs-3"></i></a><br />
                    <a href="https://www.linkedin.com/in/masum-evan-95a84a216/"><i class="fab fa-linkedin text-info fs-3"></i></a><br />
                    <a href="https://github.com/masum121212"><i class="fab fa-github-square text-info fs-3"></i></a>   
                </div>
            </div>
            <small className="text-light">copyright ©2021OnlineEdu</small>
        </div>
    );
};

export default Footer;