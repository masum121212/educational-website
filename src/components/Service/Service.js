import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
            
            {
                services.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    
        
        
    );
};

export default Service;