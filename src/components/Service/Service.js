import React from 'react';
import Course from '../Course/Course';
import DataLoad from '../DataLoad';
import './Service.css'

const Service = () => {
    const [services, setServices] = DataLoad([]);
    
    // useEffect(() => {
    //     fetch('./tools.json')
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }, [])
    return (
        <div className="container m-5 mx-auto">
            <h1 className="fw-bold fs-1"><span className="text-primary">Most</span> <span className="text-light">Popular</span> <span className="text-success">Courses</span></h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 m-5 mx-auto">
            
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

export default Service;