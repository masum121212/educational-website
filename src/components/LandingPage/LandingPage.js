import React from 'react';
import Hero from '../Hero/Hero';
import DataLoad from '../DataLoad';
import Course from '../Course/Course';
import './LandingPage.css'

const LandingPage = () => {
    let [services, setServices] = DataLoad();
    services.length = 4;
    return (
        <div className="container mx-auto">
            <Hero></Hero>
            <h1 className="m-5"><span className="text-primary">Our</span> <span className="text-light">Letast</span> <span className="text-success">Courses</span></h1>
            <div className="container landing-page  row row-cols-1 row-cols-md-4 row-cols-lg-4 mx-auto p-5 shadow">
            {
                services.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
            </div>
            
        </div>
    );
};

export default LandingPage;