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
    console.log(this.state.tattooArtistImages);
    if (this.state.tattooArtistImages) {
      // Image variable that maps over the tattooArtistImages array and renders
      const images = this.state.tattooArtistImages.map(image => {
        return (
          <div>
            <Col s={12} m={6} l={3}>
              <Card
                header={
                  <CardTitle
                    reveal
                    image={image.file}
                    imageId={image._id}
                    waves="light"
                  />
                }
                title={image.description}
                reveal={
                  <div>
                    <p>{image.style}</p>
                    <p>{image.placement}</p>
                    <p>{image.description}</p>
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
