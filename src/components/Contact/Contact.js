import React from 'react';

const Contact = () => {
    return (
        <div className="container m-5 mx-auto">
            <div className="row justify-content-center align-items-center p-5">
            <div className="col-4 col-md-4 col-lg-4">
            <h4 className="fw-bold fs-1">Location</h4><hr />
                <p>249 Ung Van Khiem Street</p>
                <p>Binh Thanh Dist, HCM City</p>
               
            </div>
            <div className="col-4 col-md-4 col-lg-4">
            <h4 className="fw-bold fs-1">
                Contact
            </h4><hr />
            <p>+88-017844-3494</p>
            <p>+88-018344-3464</p>
            


            

                
            </div>
            <div className="col-4 col-md-4 col-lg-4">
            <h4 className="fw-bold fs-1">
                Gmail Address
            </h4><hr />
                <p>web.masum@gamil.com</p>
                <p>onlineedu@gmail.com</p>
                
            </div>
            
            </div>
        </div>
    );
};

export default Contact;