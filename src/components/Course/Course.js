import React from 'react';
import './Course.css'
const Course = (props) => {
    const {name, price, imag,author} = props.course;
    return (
        <div className="col my-5">
                <div className="card h-100">
                        <img src={imag} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title fw-bold text-start">{name}</h1>
                        
                        <h4 className="card-text fw-bold text-start">${price}</h4>
                        <p className="card-text text-start"><strong>Author : {author}</strong></p>
                    
                    </div>
                    <button className="btn btn-success">Enroll Now <i className="fas fa-arrow-right"></i></button>
                </div>
        </div>
    );
};

export default Course;