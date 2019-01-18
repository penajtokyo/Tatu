import React from 'react';
import { Card, Col, CardTitle } from 'react-materialize';
import './DisplayCard.css';

const DisplayCard = (props) => {
  return (
    <div>
      {props.data.map((imageData, index) => (
        <Col l={4} m={6} s={12} key={index}>
          <Card
            header={<CardTitle reveal image={imageData.file} waves='light' />}
            title={imageData.style}
            reveal={
              <div>
                <p>
                  Style: {imageData.style}<br />
                  Placement: {imageData.placement}
                </p>
                <hr />
                <p>Description: {imageData.description}</p>
                <hr />
                <p>
                  Done By: {imageData.customer.firstName} {imageData.customer.lastName}<br />
                  Specializes In: {imageData.artist.specialization}<br />
                  Charges: {imageData.artist.pricing}<br />
                  Phone: {imageData.customer.phone}
                </p>
                <hr />
                <p>
                  Location: {imageData.artist.location}<br />
                  {imageData.artist.street}<br />
                  {imageData.artist.city}, {imageData.artist.state} {imageData.artist.zip}
                </p>
              </div>
            }>
          </Card>
        </Col>)
      )}
    </div>
  );
};

export default DisplayCard;