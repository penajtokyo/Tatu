import React from 'react';
import { Button, Card, Col, CardTitle, Icon } from 'react-materialize';
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
                  Specializes In: {imageData.customer.artistData.specialization}<br />
                  Charges: {imageData.customer.artistData.pricing}<br />
                  Phone: {imageData.customer.phone}
                </p>
                <hr />
                <p>
                  Location: {imageData.customer.artistData.location}<br />
                  {imageData.customer.artistData.street}<br />
                  {imageData.customer.artistData.city}, {imageData.customer.artistData.state} {imageData.customer.artistData.zip}
                </p>
              </div>
            }>
            {/* if selected fill in star, if not then empty star */}
            {/* add the id from the db to the button to assoicate which image to save on click */}
            <Button waves='light' onClick={() => props.handleSaveImage(imageData._id)} className='saveImageBtn'><Icon>star</Icon></Button>
          </Card>
        </Col>)
      )}
    </div>
  );
};

export default DisplayCard;