import React from 'react';

import { Link } from "react-router-dom";

const Booking = (props) => {
    const {name,Description,category} = props.book;
    return (
        <div> 
             <div className="travel-text mb-5">
               <h1>{name}</h1>
               <p  className="mt-3 pb-2">{Description}</p>
                <Link to={"/single/"+category} className="login_btn" >
                  Booking 
                  </Link>
                </div>
                 
        </div>
    );
};

export default Booking;