import React from 'react';

const NotFound = () => {
    return (
        <div className="p-5">
            <h1 className="fs-1 fw-bold">404 <i className="fas fa-exclamation-triangle text-warning"></i></h1>
            <p className="text-secondary fw-bold">Page Not Found  <i className="m-3 fas fa-cogs text-secondary"></i></p>
        </div>
    );
};

export default NotFound;