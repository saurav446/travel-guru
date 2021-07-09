import React from 'react';

import { Row, Col } from 'react-bootstrap';

const HotelBooking = (props) => {
  const { image, description, title, amount } = props.data;
  return (
    <div className="mb-2" >
      <Row>
        <Col md={6}>
          <div className="google-img">
            <img src={image} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <div className="google-content" style={{ lineHeight: '20px' }}>
            <span>{title}</span>
            <p>4 Guests, 5 Beds, 3 Bathrooms, 2 Baths </p>
            <p style={{ fontSize: '14px' }}>{description}</p>
            <strong> {amount}$/per night</strong>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HotelBooking;
