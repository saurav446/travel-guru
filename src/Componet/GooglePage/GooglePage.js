import React, { useState, useEffect } from 'react';
import '../GooglePage/GooglePage.css';

import { useParams } from 'react-router';
import { Row, Col, Container } from 'react-bootstrap';
import fakeData from '../../fakeDate';
import fakeDb from '../../fakeDb';
import HotelBooking from '../HotelBooking/HotelBooking';
import { Auth } from '../useContext/useContext';
import Moment from 'react-moment';
import GoogleMap from '../GoogleMap/GoogleMap';

const GooglePage = () => {
  const { Category } = useParams();
  const book = fakeData.find((pd) => pd.category === Category);
  
  const place = fakeDb.filter((pd) => pd.category === Category);

  const [use, setUse] = useState(place); 

  const [datas, setDatas] = useState();
  const travelData = localStorage.getItem('data');

  useEffect(() => {
    if (travelData !== null) {
      setDatas(JSON.parse(travelData));
    }
  }, [travelData]);

  return (
    <div>
      <Container>
        <div className="google-page mt-3">
          <h4 className="mb-3">
            Say to <span>{book.name}</span>
          </h4>
          <div>
            <p>
              (3) results . {datas?.Name} to {book.name} .{' '}
              {<Moment format="MMM DD">{datas?.Date}</Moment>} to{' '}
              {<Moment format="MMM D">{datas?.Dates}</Moment>}
            </p>
          </div>

          <Row>
            <Col md={6}>
              {use.map((pd) => (
                <HotelBooking data={pd}></HotelBooking>
              ))}
            </Col>
            <Col md={6}>
              <GoogleMap use={use} ></GoogleMap>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GooglePage;
