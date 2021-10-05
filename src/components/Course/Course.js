import React from 'react';

const Course = (props) => {
    const {name, price, imag,author} = props.course;
    return (
        <div className="course col w-200 h-200">
                <div className="card shadow p-3 mb-5 bg-body rounded">
                        <img src={imag} className="card-img-top" alt="..."/>
                        <hr />
                    <div className="card-body">
                        <h1 className="card-title fw-bold">{name}</h1>
                        
                        <h4 className="card-text fw-bold">${price}</h4>
                        <code className="card-text"><strong>Author : {author}</strong></code>
                    </div>
                    <button className="btn btn-primary">Enroll Now <i className="fas fa-arrow-right"></i></button>
                </div>
        </div>
    );
};

export default Course;