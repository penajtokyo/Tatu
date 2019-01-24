import React, { Component } from "react";
import { Col, Card, CardTitle } from "react-materialize";
import API from "../../utils/API";

class Images extends Component {
  state = {
    tattooArtistImages: []
  };

  // Once the component has been added to the page the
  componentDidMount() {
    this.loadImages();
  }

  // This method is called to get the Images stored to the artists pictures column
  loadImages = () => {
    API.getImages()
      .then(res => {
        this.setState({
          tattooArtistImages: res.data.pictures
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.tattooArtistImages) {
      // Image variable that maps over the tattooArtistImages array and renders
      const images = this.state.tattooArtistImages.map((image, index) => {
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
                    <p>Style: {image.style}<br />
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
