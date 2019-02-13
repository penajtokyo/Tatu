import React, { Component } from "react";
import { Card, Col, CardTitle, Button } from 'react-materialize';
import { Redirect } from "react-router-dom";
import './DisplayCard.css';
import API from '../../utils/API'


class DisplayCard extends Component {

  // Globally when I console this.props.data I will be displaying ALL of the images & the associated artist data
  state = {
    redirect: false,
    artistData: {},
    tattooArtistImages: []
  };

  loadImages = () => {
    API.getImages()
      .then(res => {
        this.setState({
          tattooArtistImages: res.data.pictures
        });
      })
      .catch(err => console.log(err));
  };

  handleClick = cardData => {
    console.log(cardData);
    this.loadImages()

    console.log(this.state.tattooArtistImages)

    const artistData = {
      firstName: cardData.customer.firstName,
      lastName: cardData.customer.lastName,
      _id: cardData.customer._id,
      artistData: {
        city: cardData.artist.city,
        location: cardData.artist.location,
        pricing: cardData.artist.pricing,
        specialization: cardData.artist.specialization,
        state: cardData.artist.state,
        street: cardData.artist.street,
        zip: cardData.artist.zip,
        _id: cardData.artist._id
      }
    };

    if (artistData) {
      this.setState({
        redirect: true,
        artistData: artistData
      });
    } else {
      console.log("This doesn't work!");
    }

    // console.log(artistData);
  };

  handleRedirect = () => {
    return (
      <Redirect
        to={{
          pathname: "/artist",
          state: { detail: this.state.artistData }
        }}
      />
    );
  };



  render() {

    return (
      <div>
        {this.state.redirect ? this.handleRedirect() : ""}
        {this.props.data.map((imageData, index) => (
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
                  <Button onClick={event => this.handleClick(imageData)}>
                    Artist Profile
                </Button>
                </div>
              }>
            </Card>
          </Col>)
        )}
      </div>
    );
  }

};

export default DisplayCard;