import React, { Component } from "react";
import { Container, Col, Row } from "react-materialize";
import Images from "../../components/Images/Images";
import AddPhotoForm from "../../components/AddPhotoForm/AddPhotoForm";

class ArtistProfilePage extends Component {
  render() {
    const userData = this.props.location.state.detail;
    const artistData = this.props.location.state.detail.artistData;

    return (
      <div>
        <Container>
          <AddPhotoForm id={artistData._id} />
          <Row>
            <Col s={12} m={12} l={12} className="center">
              <h6>{`${userData.firstName}  ${userData.lastName}`}</h6>
              <p>{`${artistData.location} ${artistData.city} ${
                artistData.state
              } ${artistData.zip}`}</p>
              <p>{artistData.pricing}</p>
              <p>{artistData.specialization}</p>
            </Col>
          </Row>
          <Row>
            <Images id={artistData._id} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ArtistProfilePage;
