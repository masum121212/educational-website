import React from 'react';

const Contact = () => {
    return (
        <div className="container m-5 mx-auto">
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto text-light">
            <div className="col">
                <h4 className="fw-bold fs-1"><i class="fas fa-map-marker-alt text-info"></i>  Location</h4>
                <hr />
                <p>249 Ung Van Khiem Street</p>
                <p>Binh Thanh Dist, HCM City</p>
            </div>
            <div className="col">
                <h4 className="fw-bold fs-1"><i class="fas fa-phone-square text-info"></i>  Contact</h4>
                <hr />
                <p>+88-01822777360</p>
                <p>+88-01759427128</p> 
            </div>
            <div className="col">
                <h4 className="fw-bold fs-1"><i class="fas fa-mail-bulk  text-info"></i>  Gmail</h4>
                <hr />
                <p>web.masum@gamil.com</p>
                <p>onlineedu@gmail.com</p>    
            </div>
            </div>
        </div>
    );
};

export default Contact;