import React, { Component } from "react";
import { Col, Row, Input } from "react-materialize";
import API from "../../utils/API";

class AddPhotoForm extends Component {
  state = {
    url: "",
    style: "",
    placement: "",
    description: ""
  };

  // Method that sets the photo data that is being shipped to the DB
  handleAddPhoto = () => {
    const photoData = {
      file: this.state.url,
      style: this.state.style,
      placement: this.state.placement,
      description: this.state.description
    };

    // Call to utils.API.addImage post request to the backend
    API.addImage(photoData)
      .then(res => {})
      .catch(err => console.log(err));
  };

  // Submit form event handler that check's to make sure that the user has provided all of the necessary information in the form
  handleSubmit = event => {
    event.preventDefault();

    if (
      this.state.url &&
      this.state.style &&
      this.state.placement &&
      this.state.description
    ) {
      this.handleAddPhoto();
      window.location.reload();
    } else {
      alert("Oops! It looks like something's missing.");
    }
  };

  // Event handler to set the form data to corresponding state key's
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
    console.log(value);
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12} l={12} className="center" id={this.props}>
            {/* Modal button that displays on the Artist Profile page */}
            <Row></Row>
              <Row>
                {/* Add photo form */}
                <form onSubmit={this.handleSubmit}>
                <Row>
                  <Input
                    s={12} m={6} l={6}
                    type="url"
                    name="url"
                    label="Image URL"
                    value={this.state.url}
                    onChange={this.handleInputChange}
                  />
                  <Input
                    s={12} m={6} l={6}
                    type="text"
                    name="description"
                    label="Description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                </Row>
                  <Input
                    s={12} m={6} l={6}
                    type="select"
                    name="style"
                    label="Style"
                    value={this.state.style}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Choose a Style...</option>
                    <option value="Abstract">Abstract</option>
                    <option value="American Traditional">American Traditional</option>
                    <option value="Anatomy">Anatomy</option>
                  </Input>

                  <Input
                    s={12} m={6} l={6}
                    type="select"
                    name="placement"
                    label="Placement"
                    value={this.state.placement}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Choose Placement...</option>
                    <option value="Ankle">Ankle</option>
                    <option value="Bicep">Bicep</option>
                    <option value="Chest">Chest</option>
                  </Input>
                </form>
              </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddPhotoForm;
