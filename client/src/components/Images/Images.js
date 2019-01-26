import React, { Component } from "react";
import { Col, Card, CardTitle } from "react-materialize";

class Images extends Component {
  render() {
    if (this.props.tattooArtistImages) {
      // Image variable that maps over the tattooArtistImages array and renders
      const images = this.props.tattooArtistImages.map((image, index) => {
        return (
          <div key={index}>
            <Col s={12} m={6} l={4}>
              <Card
                header={
                  <CardTitle
                    reveal
                    image={image.file}
                    imageid={image._id}
                    waves="light"
                  />
                }
                title={image.style}
                reveal={
                  <div>
                    <p>
                      Style: {image.style}
                      <br />
                      Placement: {image.placement}
                    </p>
                    <hr />
                    <p>Description: {image.description}</p>
                  </div>
                }
              />
            </Col>
          </div>
        );
      });
      return images;
    } else {
      return <h4>No Images</h4>;
    }
  }
}

export default Images;
