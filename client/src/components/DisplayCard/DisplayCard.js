import React from 'react';
import { Button, Card, Col, CardTitle } from 'react-materialize';
import './DisplayCard.css';

const DisplayCard = (props) => {
  //helper function to check if images are in the user's savedPictures array used in the button display of the card
  function checkImgSaved(arr, val) {
    return arr.some(function(arrVal) {
      return val === arrVal
    })
  };

  return (
    <div>
      {props.data.map((imageData, index) => (
        <Col l={4} m={6} s={12} key={index}>
          <Card
            id={imageData._id}
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
            {checkImgSaved(props.savedImgIDs, imageData._id) === false ? (
              <Button onClick={() => props.handleSaveImage(imageData._id)} className='saveImageBtn' tooltip='Add to Favorites'><i className="far fa-heart"></i></Button>
            ) : (
              <Button onClick={() => props.handleRemoveImage(imageData._id)} className='saveImageBtn' tooltip='Remove from Favorites'><i className="fas fa-heart"></i></Button>
            )}
            </Card>
        </Col>)
      )}
    </div>
  );
};

export default DisplayCard;