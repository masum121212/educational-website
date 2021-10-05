import React from 'react';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import Service from '../Service/Service';

const LandingPage = () => {
    return (
        <div>
            <Hero></Hero>
            <h1><span className="text-primary">Our</span> <span>Letast</span> <span className="text-success">Courses</span></h1>
            <Service></Service>
        </div>
    );
};

export default LandingPage;